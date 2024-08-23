import React, {
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { Graph, Cell } from "@antv/x6";
import {
  DiagramPermissionEnum,
  ICodeList,
  IDeviceInfo,
  IGraphOptions,
  IWiringDiagram,
  IWiringDiagramRes,
} from "./dto";
import {
  hideAllNodePorts,
  initWiringItems,
  removeNodeTools,
  setPlaceholderStrokeWidth,
} from "./utils/node-utils";
import { getWiringNodeByKey, initGraphOptions } from "./const";
import { addEdgeTools, removeEdgeTools } from "./utils/edge-utils";
import { useNodeParams } from "./hooks/useNodeParams";
import configCenter from "@gw/odm-db";
import { EditorContext, EditorContextProvider } from "./model/index";
import EditArea from "./components/edit-area";
import useRequest from "./utils/use-request-temp";
import apis from "./api";
import styles from "./index.module.less";
import ItemLibrary from "./components/item-library";
import OperationArea from "./components/operation-area";
import WarningIcon from "./assets/editor/warning.svg";
import { Confirm, message } from "@gw/web-basic-components";
import "rc-color-picker/assets/index.css";
import "./edge-anim.less";
import { setCells } from "./utils/cells";
import SubDiagramCenter from "./components/sub-diagram-center";
import NameEditor from "./components/name-editor/index";
import ReturnImg from "./assets/sub-diagram/return.svg";
import { useMqtt } from "@gw/gw-arch";
import DiagramCore from "./diagram-core";
import useSelectionRect from "./hooks/useSelectionRect";
import SubDiagramRelate from "./components/sub-diagram-relate";
import checkPermission from "./utils/checkPermission";

const { MqttConfig } = configCenter;

let unsubscribeTopics;
// 当前是否为编辑过状态
let tempSavingState;
let timer;

const WiringDiagram = (props: IWiringDiagram) => {
  const {
    graphData,
    codeList,
    needSetting = false,
    currentProject,
    isSettingState = false,
    actionRef,
    wiringId,
    subGraphData = null,
    setSubGraphData = () => {},
    subName,
    hotZoneList = [],
  } = props;
  const graphRef = useRef<Graph>(null);
  const timerRef = useRef(null);
  const subGraphNameRef = useRef("");
  //用于处理定时器里拿不到最新数据问题，需要用ref
  const propsRef = useRef(null);
  const graphOptionsRef = useRef(null);
  const wiringIdRef = useRef(null);
  propsRef.current = props;
  const graph = graphRef.current;
  const nodeMoveableRef = useRef<boolean>(false);
  // 当前选中节点
  const tempNodeEditTypeRef = useRef<number>(0);
  const [setMqtt, handleTimeJudge] = useNodeParams();
  const mqttObj = useMqtt();
  const { init, subscribe, onMessage } = mqttObj;

  const subGraphName = subName?.subGraphName;
  subGraphNameRef.current = subName?.subGraphName;
  const setSubGraphName = subName?.setSubGraphName;

  // 第一次进入页面
  const defaultState = useRef<boolean>(true);

  // 是否是设置状态
  const { editorState, setEditorState } = useContext(EditorContext);
  const { savingState } = editorState;

  const setIsSettingState = (state) => {
    setEditorState({
      ...editorState,
      isSettingState: state,
    });
  };

  const updateSavingState = (state) => {
    setEditorState({
      ...editorState,
      savingState: state,
    });
  };

  // 当前点击节点
  const [curNode, setCurNode] = useState<Cell>(null);
  // 被选中的图元的类型
  const [currentSelectedType, setCurrentSelectedType] = useState<string>("");

  const [nodeEditType, setNodeEditType] = useState<number>(0);
  // 保存图表的相关信息
  const [graphOptions, setGraphOptions] =
    useState<IGraphOptions>(initGraphOptions);
  graphOptionsRef.current = graphOptions;

  // 确认离开弹框
  const [savingConfirmVis, setSavingConfirmVis] = useState<boolean>(false);

  // 元件名称下拉列表
  const [deviceSn, setDeviceSn] = useState<IDeviceInfo[]>([]);

  // 后端获取mqtt的nodeId用于监听
  const [fetchCodeList, setFetchCodeList] = useState<ICodeList[]>([]);

  // 待绑定的节点
  const [nodeTobeRelated, setNodeTobeRelated] = useState<Cell>(null);

  // 保存绘制的接线图
  const [, saveGridCanvas] = useRequest(apis.wiring.store, {
    parallel: false,
  });

  // 保存绘制的接线图
  const [, saveSubGridCanvas] = useRequest(apis.wiring.storeSub, {
    parallel: false,
  });

  // 获取所有设备sn号
  const [, fetchDeviceSn] = useRequest(apis.microGrid.getThings, {
    parallel: false,
  });

  // 查看分图
  const [, getSub] = useRequest(apis.wiring.getSub, {
    parallel: false,
  });

  // 热区创建
  useSelectionRect(graph, nodeEditType);

  const handleBeforeunload = (event) => {
    if (tempSavingState) {
      const confirmationMessage = "你确定离开此页面吗?";
      event.returnValue = confirmationMessage;
      return confirmationMessage;
    } else {
      return false;
    }
  };

  // 当前编辑状态
  const handleNodeEditType = (type: number) => {
    tempNodeEditTypeRef.current = type;
    setNodeEditType(type);
    graph.disablePanning();
    if (graph?.disableSelection) {
      graph.disableSelection();
    }
    removeEdgeTools(graph);
    if (type === 1 && graph?.enableSelection) {
      // 激活框选
      graph.enableSelection();
    }
    if (type === 2) {
      // 拖拽状态激活
      graph.enablePanning();
    }
    if (type === 3) {
      addEdgeTools(graph);
    }
  };

  // 渲染画布
  const renderWiringDiagram = () => {
    setGraphOptions(initGraphOptions);
    if (!graphData) {
      if (graph) {
        graph.clearCells();
        graph.clearBackground();
        graph.hideGrid();
      }
      return;
    }
    if (graphData && graph) {
      if (graphData.diagram) {
        graph.fromJSON(graphData.diagram);
      } else {
        graph.fromJSON([]);
      }
      graph.zoomTo(1);
      graph.centerContent();
      graph.getCells().forEach((cell) => {
        if (cell?.shape === "text-block") {
          cell.setAttrByPath("body", {
            fill: "#fff0",
            strokeWidth: 0,
          });
        }
      });
      // 去掉占位符元件的图标只保留文字内容
      setPlaceholderStrokeWidth(graph, 0);
      setFetchCodeList(codeList || []);
      if (graphData.graphOptions) {
        setGraphOptions(graphData.graphOptions);
      } else {
        setGraphOptions(initGraphOptions);
      }
    } else if (graph?.clearCells) {
      graph.clearCells();
    }
    initWiringItems(graph);
    // 将标签名进行同步
    hotZoneList.forEach((item) => {
      const node = graph?.getNodes().find((n) => {
        return n?.getData()?.hotId === item.hotId;
      });
      if (node) {
        node?.setData({
          name: item.name,
        });
        node.setAttrs({
          label: {
            text: item.name,
            refX: 0,
            refY: -15,
            fontWeight: "bold",
            textAnchor: "start",
            dx: 0,
          },
          body: {
            fill: "rgba(59, 101, 238, 0.1)",
          },
        });
      }
    });
    clearInterval(timer);
    timer = handleTimeJudge(graph);
  };

  const firstRenderRef = useRef(true);

  useEffect(() => {
    renderWiringDiagram();
  }, [graphData]);

  // 因为会出现graph晚于graphData被赋值的情况
  useEffect(() => {
    if (graph && firstRenderRef.current) {
      renderWiringDiagram();
      firstRenderRef.current = false;
      setTimeout(() => {
        graph.centerContent();
      }, 300);
    }
  }, [graph]);

  useEffect(() => {
    if (graph) {
      handleNodeEditType(nodeEditType);
    }
  }, [nodeEditType, graph]);

  useEffect(() => {
    // 在画布点击位置创建节点
    const createNode = (e) => {
      const { x, y } = e;
      graph.addNode({
        shape: currentSelectedType,
        x,
        y,
        ...getWiringNodeByKey(currentSelectedType).nodeStyle,
      });
      setCurrentSelectedType("");
    };
    if (currentSelectedType) {
      graph.on("blank:click", createNode);
    }
    return () => {
      graph?.off("blank:click", createNode);
    };
  }, [currentSelectedType]);

  // 点击查看分图
  useEffect(() => {
    const jump = (e) => {
      const extData = e?.cell?.getData();
      const { wiringId: subWiringId } = extData;
      if (subWiringId) {
        getSub({
          wiringId: subWiringId,
        }).then((res) => {
          // res为空对象
          if (Object.keys(res).length === 0) {
            message.error("数据为空，请检查该分图是否已被删除");
            return;
          }
          setSubGraphData(res);
        });
      }
    };
    if (graph) {
      if (isSettingState === false) {
        graph.on("node:click", jump);
      } else {
        graph.off("node:click", jump);
      }
    }
    return () => {
      graph?.off("node:click", jump);
    };
  }, [graph, isSettingState]);

  useEffect(() => {
    if (!graph) return;
    // 绘制画布颜色
    if (graphOptions?.bgColor) {
      graph.drawBackground({ color: graphOptions.bgColor });
    }
    // 绘制网格颜色
    if (graphOptions?.gridColor) {
      graph.drawGrid({
        type: "dot",
        args: [
          {
            color: graphOptions?.gridColor, // 主网格线颜色
            thickness: 1, // 主网格线宽度
          },
        ],
      });
    }
    if (graphOptions?.showGrid) {
      graph.showGrid();
    } else {
      graph.hideGrid();
    }
  }, [graphOptions]);

  useEffect(() => {
    // 初始化mqtt
    init(MqttConfig);
    tempNodeEditTypeRef.current = 0;
    window.addEventListener("beforeunload", handleBeforeunload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeunload);
    };
  }, []);

  useEffect(() => {
    if (codeList?.length) {
      unsubscribeTopics = setMqtt(
        { subscribe, onMessage },
        codeList as any,
        graph
      );
    }
    return () => {
      if (unsubscribeTopics) unsubscribeTopics();
    };
  }, [fetchCodeList]);

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    nodeMoveableRef.current = isSettingState;
    // 默认进入编辑为选择状态
    if (isSettingState) {
      initWiringItems(graph);
      setNodeEditType(1);
      updateSavingState(true);
      clearInterval(timer);
    } else {
      setNodeEditType(2);
    }
    if (graph && isSettingState === false) {
      if (graph?.cleanClipboard) {
        graph.cleanClipboard();
      }
      // 重置选择操作
      setNodeEditType(2);
      setCurNode(null);
      if (graph?.resetSelection) {
        graph.resetSelection();
      }
      removeNodeTools(graph);
      hideAllNodePorts(graph);
    }
    if (graph && isSettingState === true) {
      graph.getCells().forEach((cell) => {
        if (cell?.shape === "text-block") {
          cell.setAttrByPath("body", {
            fill: "#fff0",
            strokeWidth: 1,
          });
        }
      });
      removeNodeTools(graph);
      setPlaceholderStrokeWidth(graph, 1);
      // 编辑状态不接受mqtt消息
      if (unsubscribeTopics) unsubscribeTopics();
    }
  }, [isSettingState, graph]);

  const getNodeType = () => {
    if (graph && curNode) {
      if (graph.isEdge(curNode)) {
        return "edge";
      } else if (graph.isNode(curNode)) {
        if (curNode?.shape === "text-block") {
          return "text-block";
        }
        return "device";
      }
    }
    return "graph";
  };

  useEffect(() => {
    if (graph?.cleanClipboard) {
      graph.cleanClipboard();
    }
    setIsSettingState(false);
    if (currentProject) {
      fetchDeviceSn({ gridId: currentProject.id }).then((res: any) => {
        setDeviceSn(res);
      });
    }
  }, [currentProject]);

  const clear = () => {
    updateSavingState(false);
  };

  const clearEdgeArrowTools = () => {
    const cells = graph.getCells() || [];
    cells.forEach((cell) => {
      if (graph.isEdge(cell)) {
        cell.removeTool("source-arrowhead");
        cell.removeTool("target-arrowhead");
      }
    });
  };

  const showRectNodes = () => {
    const nodes = graph.getNodes() || [];
    nodes.forEach((node) => {
      if (node?.shape === "rect") {
        node?.show();
      }
    });
  };

  useEffect(() => {
    //一点设置，开始计时，每5分钟自动保存一次
    if (isSettingState) {
      timerRef.current = setInterval(() => {
        if (subGraphData) {
          onAutoSaveSubDiagram();
        } else {
          onAutoSavingDiagram();
        }
      }, 1000 * 60 * 5);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      wiringIdRef.current = null;
    }
    return clearIntervalFunction;
  }, [isSettingState]);

  const clearIntervalFunction = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      wiringIdRef.current = null;
    }
  };

  // 保存接线图
  const onSavingDiagram = (callback) => {
    setCurNode(null);
    showRectNodes();
    clearEdgeArrowTools();
    removeNodeTools(graph);
    hideAllNodePorts(graph);
    defaultState.current = true;
    if (graph) {
      initWiringItems(graph, clear);
    }

    const codeListNew = setCells(graph);

    const cellsJson = JSON.stringify({
      diagram: graph.toJSON(),
      graphOptions: graphOptions,
    });

    const nodes = graph.getNodes();
    const rectNodes = nodes.filter((node) => node?.shape === "rect");

    const hotZoneInfo = rectNodes
      .map((item) => {
        const data = item?.getData();
        if (data?.wiringId) {
          return {
            name: data?.name,
            wiringId: data?.wiringId,
            hotId: data?.hotId,
          };
        } else {
          return undefined;
        }
      })
      .filter(Boolean);
    saveGridCanvas({
      thingProjectId: currentProject.id,
      codeList: Array.from(codeListNew) || [],
      category: currentProject.category,
      cellsJson: cellsJson,
      wiringId: propsRef.current.wiringId ?? wiringIdRef.current,
      hotRelInfoList: hotZoneInfo,
      name: subGraphName || "未命名",
    })
      .then(() => {
        setIsSettingState(false);
        setEditorState({
          savingState: false,
          isSettingState: false,
        });
        message.success("保存成功");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        if (callback) {
          callback();
        }
      });
  };

  // 自动保存接线图
  const onAutoSavingDiagram = () => {
    const codeListNew = setCells(graph);
    const cellsJson = JSON.stringify({
      diagram: graph.toJSON(),
      graphOptions: graphOptionsRef.current,
    });
    const nodes = graph.getNodes();
    const rectNodes = nodes.filter((node) => node?.shape === "rect");
    const hotZoneInfo = rectNodes
      .map((item) => {
        const data = item?.getData();
        if (data?.wiringId) {
          return {
            name: data?.name,
            wiringId: data?.wiringId,
            hotId: data?.hotId,
          };
        } else {
          return undefined;
        }
      })
      .filter(Boolean);
    const params = {
      thingProjectId: currentProject.id,
      codeList: Array.from(codeListNew) || [],
      category: currentProject.category,
      cellsJson: cellsJson,
      wiringId: propsRef.current.wiringId ?? wiringIdRef.current,
      hotRelInfoList: hotZoneInfo,
      name: subGraphNameRef.current || "未命名",
    };
    saveGridCanvas(params).then((res: IWiringDiagramRes) => {
      message.success("自动保存成功");
      wiringIdRef.current = res.wiringId;
    });
  };

  // 保存分图

  const onSaveSubDiagram = (callback) => {
    setCurNode(null);
    clearEdgeArrowTools();
    removeNodeTools(graph);
    hideAllNodePorts(graph);
    defaultState.current = true;
    if (graph) {
      initWiringItems(graph, clear);
    }
    const codeListNew = setCells(graph);
    const cellsJson = JSON.stringify({
      diagram: graph.toJSON(),
      graphOptions: graphOptions,
    });

    graph?.toPNG(
      (uri) => {
        saveSubGridCanvas({
          thingProjectId: currentProject.id,
          codeList: Array.from(codeListNew) || [],
          category: currentProject.category,
          cellsJson: cellsJson,
          wiringId: subGraphData?.wiringId || wiringId,
          fileData: uri,
          backgroundColor: graphOptions.bgColor,
          name: subGraphName || "未命名分图",
        })
          .then((res) => {
            setIsSettingState(false);
            setEditorState({
              savingState: false,
              isSettingState: false,
            });
            setSubGraphData(res);
            message.success("保存成功");
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            if (callback) {
              callback();
            }
          });
      },
      { backgroundColor: graphOptions.bgColor, quality: 1 }
    );
  };

  //自动保存分图
  const onAutoSaveSubDiagram = () => {
    const codeListNew = setCells(graph);
    const cellsJson = JSON.stringify({
      diagram: graph.toJSON(),
      graphOptions: graphOptionsRef.current,
    });
    graph?.toPNG(
      (uri) => {
        const params = {
          thingProjectId: currentProject.id,
          codeList: Array.from(codeListNew) || [],
          category: currentProject.category,
          cellsJson: cellsJson,
          wiringId: propsRef.current.subGraphData.wiringId || undefined,
          fileData: uri,
          backgroundColor: graphOptions.bgColor,
          name: subGraphNameRef.current || "未命名",
        };
        saveSubGridCanvas(params).then((res: any) => {
          message.success("分图自动保存成功");
          propsRef.current.setSubGraphData(res);
        });
      },
      { backgroundColor: graphOptions.bgColor, quality: 1 }
    );
  };

  // 退出编辑接线图
  const onExitingDiagram = () => {
    if (savingState) {
      setSavingConfirmVis(true);
    } else {
      setIsSettingState(false);
      renderWiringDiagram();
    }
  };

  // 退出分图编辑
  const onExitingSubDiagram = () => {
    if (savingState) {
      setSavingConfirmVis(true);
    } else {
      renderWiringDiagram();
      setIsSettingState(false);
    }
  };

  const confirmExiting = () => {
    setEditorState({
      savingState: false,
      isSettingState: false,
    });
    renderWiringDiagram();
    if (subGraphData && subGraphName) {
      setSubGraphName(subGraphData?.name);
    }
    if (Object.keys(subGraphData || {}).length === 0) {
      setSubGraphData(null);
    }
  };

  useImperativeHandle(actionRef, () => ({
    onCancel: () => {
      setCurrentSelectedType("");
      if (subGraphData) {
        onExitingSubDiagram();
      } else {
        onExitingDiagram();
      }
    },
    onSave: (callback) => {
      setCurrentSelectedType("");
      if (subGraphData) {
        onSaveSubDiagram(callback);
      } else {
        onSavingDiagram(callback);
      }
    },
  }));

  // 页面刷新或关闭时的提示
  useEffect(() => {
    window.onbeforeunload = function (e) {
      if (savingState) {
        e.returnValue = "接线图未保存，是否确定离开？离开后数据不可恢复";
      }
    };
    return () => {
      window.onbeforeunload = null;
    };
  }, [savingState]);

  // 正处在其他编辑状态时，不展示元件库
  const isEditing = useMemo(() => {
    return (
      // 处在连线或设置文本框状态，或者已选择元件
      nodeEditType === 3 ||
      nodeEditType === 4 ||
      nodeEditType === 5 ||
      currentSelectedType !== ""
    );
  }, [nodeEditType, currentSelectedType]);

  const onReturnMainGraph = () => {
    setSubGraphData(null);
    renderWiringDiagram();
  };

  // 记录本次修改中的关联分图列表
  const relatedSubListRef = useRef([]);

  useEffect(() => {
    if (graph) {
      const rectNodes = graph
        ?.getNodes()
        .filter((node) => node?.shape === "rect" && node?.getData()?.wiringId);
      relatedSubListRef.current = rectNodes.map(
        (node) => node?.getData()?.wiringId
      );
    }
  }, [isSettingState, graph]);

  return (
    <div className={styles["playground-container"]}>
      <div className={styles.canvasWrapper}>
        {needSetting && isSettingState && (
          <ItemLibrary
            currentSelectedType={currentSelectedType}
            setCurrentSelectedType={setCurrentSelectedType}
            isSettingState={isSettingState}
            setCurNode={setCurNode}
            isEditing={isEditing}
          />
        )}
        <div className={styles["graph-wrapper"]}>
          {isSettingState && (
            <OperationArea
              graphRef={graphRef}
              isSettingState={isSettingState}
              nodeEditType={nodeEditType}
              setNodeEditType={setNodeEditType}
              curNode={curNode}
              setCurNode={setCurNode}
              onSavingDiagram={onSavingDiagram}
              currentSelectedType={currentSelectedType}
              setNodeTobeRelated={setNodeTobeRelated}
              subGraphData={subGraphData}
              relatedSubListRef={relatedSubListRef}
            />
          )}
          <div className={styles.canvas} id="graph-container">
            <DiagramCore
              graphRef={graphRef}
              nodeMoveableRef={nodeMoveableRef}
              tempNodeEditTypeRef={tempNodeEditTypeRef}
              setCurNode={setCurNode}
              setNodeEditType={setNodeEditType}
              isSettingState={isSettingState}
            />
            {subGraphData && !isSettingState && (
              <div className={styles["sub-return"]}>
                <img
                  src={ReturnImg}
                  className={styles["sub-return-button"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    onReturnMainGraph();
                  }}
                />
                <span className={styles["sub-name"]}>返回主接线图</span>
              </div>
            )}
          </div>
        </div>
        {needSetting && isSettingState && (
          <EditArea
            graphRef={graphRef}
            nodeType={getNodeType()}
            curNode={curNode}
            deviceSn={deviceSn}
            isSettingState={isSettingState}
            graphOptions={graphOptions}
            setGraphOptions={setGraphOptions}
            isEditing={isEditing}
          />
        )}
      </div>
      {nodeTobeRelated && (
        <SubDiagramRelate
          nodeTobeRelated={nodeTobeRelated}
          setNodeTobeRelated={setNodeTobeRelated}
          currentProject={currentProject}
          relatedSubListRef={relatedSubListRef}
          graphRef={graphRef}
        />
      )}
      <Confirm
        icon={WarningIcon}
        open={savingConfirmVis}
        autoClose
        onClose={() => {
          setSavingConfirmVis(false);
        }}
        title={
          <>
            <div className="confirmModal-detail">
              接线图未保存，是否确定离开？
            </div>
            <div className="confirmModal-tip">离开后数据不可恢复</div>
          </>
        }
        okText={"确定"}
        cancelText={"取消"}
        onOk={confirmExiting}
        onCancel={() => {
          setSavingConfirmVis(false);
        }}
      />
    </div>
  );
};

export {
  WiringDiagram,
  EditorContext,
  EditorContextProvider,
  SubDiagramCenter,
  NameEditor,
  checkPermission,
  DiagramPermissionEnum,
};
