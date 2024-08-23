import {
  Confirm,
  Divider,
  Dropdown,
  Select,
  Space,
} from "@gw/web-basic-components";
import React, { useEffect, useState } from "react";
import styles from "./index.module.less";
import { ReactComponent as DropdownIcon } from "../../assets/operation-area/dropdown.svg";
import { ReactComponent as CutIcon } from "../../assets/operation-area/cut.svg";
import { ReactComponent as CopyIcon } from "../../assets/operation-area/copy.svg";
import { ReactComponent as PasteIcon } from "../../assets/operation-area/paste.svg";
import { ReactComponent as DeleteIcon } from "../../assets/operation-area/delete.svg";
import { ReactComponent as UndoIcon } from "../../assets/operation-area/undo.svg";
import { ReactComponent as RedoIcon } from "../../assets/operation-area/redo.svg";
import { ReactComponent as MinusIcon } from "../../assets/operation-area/minus.svg";
import { ReactComponent as PlusIcon } from "../../assets/operation-area/plus.svg";
import { ReactComponent as TextIcon } from "../../assets/operation-area/text-edit.svg";
import { ReactComponent as SelectIcon } from "../../assets/operation-area/select.svg";
import { ReactComponent as DragIcon } from "../../assets/operation-area/drag.svg";
import { ReactComponent as ConnectIcon } from "../../assets/operation-area/connect.svg";
import { ReactComponent as RelateIcon } from "../../assets/operation-area/relate.svg";
import { ReactComponent as EyeIcon } from "../../assets/operation-area/eye.svg";

import DeleteImg from "../../assets/operation-area/delete-img.png";
import { Cell, Graph } from "@antv/x6";
import { message } from "antd";
import { hideAllNodePorts, showAllNodePorts } from "../../utils/node-utils";

interface IProps {
  graphRef: React.RefObject<Graph>;
  isSettingState: boolean;
  nodeEditType: number;
  setNodeEditType: React.Dispatch<React.SetStateAction<number>>;
  curNode;
  setCurNode;
  onSavingDiagram;
  currentSelectedType;
  setNodeTobeRelated: (data: Cell) => void;
  subGraphData: any;
  relatedSubListRef: any;
}

let tempNodeEditType = 0;
let tempSettingState = false;
let keyPressed = false;
let tmpUndoEnable = false;
let tmpRedoEnable = false;

const OperationArea = ({
  graphRef,
  isSettingState,
  nodeEditType,
  setNodeEditType,
  curNode,
  setCurNode,
  onSavingDiagram,
  currentSelectedType,
  setNodeTobeRelated,
  subGraphData,
  relatedSubListRef,
}: IProps) => {
  const graph = graphRef.current;
  const [curZoom, setCurZoom] = useState(1);
  const [undoEnabled, setUndoEnabled] = useState<boolean>(false);
  const [redoEnabled, setRedoEnabled] = useState<boolean>(false);
  const [cutEnabled, setCutEnabled] = useState<boolean>(false);
  const [copyEnabled, setCopyEnabled] = useState<boolean>(false);
  const [pasteEnabled, setPasteEnabled] = useState<boolean>(false);
  const [deleteEnabled, setDeleteEnabled] = useState<boolean>(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<boolean>(false);
  const [hotZoneVisible, setHotZoneVisible] = useState<boolean>(true);

  const toggleHotZoneVisible = () => {
    setNodeEditType(1);
    setHotZoneVisible((prev) => !prev);
  };

  useEffect(() => {
    if (graph) {
      const rectNodes = graph
        .getNodes()
        .filter((node) => node.shape === "rect");
      rectNodes.forEach((node) => {
        if (hotZoneVisible) {
          node.show();
          graph.setSelectionFilter(null);
        } else {
          node.hide();
          graph.clearTransformWidgets();
          graph.cleanSelection();
          graph.setSelectionFilter((n) => {
            return n?.shape !== "rect";
          });
        }
      });
    }
  }, [graph, hotZoneVisible]);

  useEffect(() => {
    tempNodeEditType = nodeEditType;
    if (nodeEditType === 3 && graph) {
      showAllNodePorts(graph);
    }
    if (nodeEditType !== 3 && graph) {
      hideAllNodePorts(graph);
    }
  }, [nodeEditType]);

  useEffect(() => {
    if (graph) {
      graph.zoomTo(curZoom);
    }
  }, [curZoom, graph]);

  const onMinus = () => {
    // curZoom不小于0 不大于1
    if (curZoom - 0.1 >= 0.1) {
      setCurZoom(curZoom - 0.1);
    }
  };

  const onPlus = () => {
    if (curZoom + 0.1 <= 4) {
      setCurZoom(curZoom + 0.1);
    }
  };

  const ViewOperation = () => {
    return (
      <div className={styles.viewOperation}>
        <MinusIcon onClick={onMinus} />
        <PlusIcon onClick={onPlus} />
        <span
          onClick={() => {
            graph.zoomToFit();
            setCurZoom(Number(graph.transform.getZoom().toFixed(1)));
          }}
        >
          窗口大小
        </span>
        <span
          onClick={() => {
            setCurZoom(1);
            graph.centerContent();
          }}
        >
          重置
        </span>
      </div>
    );
  };

  // 处理删除
  const handleDelete = () => {
    const ids = graph
      .getSelectedCells()
      .map((cell) => cell?.getData()?.wiringId);
    relatedSubListRef.current = relatedSubListRef.current.filter(
      (id) => !ids.includes(id)
    );
    graph.removeCells(graph.getSelectedCells());
    setShowDeleteConfirm(false);
  };

  // 处理撤销
  const handleUndo = () => {
    if (graph) graph.undo();
  };

  // 处理重做
  const handleRedo = () => {
    if (graph) graph.redo();
  };

  // 处理复制
  const handleCopy = () => {
    if (graph) {
      if (graph.getSelectedCells().length) {
        message.success("复制成功");
        const seletedCells = graph.getSelectedCells();
        if (seletedCells?.length) {
          // 复制的时候去掉组串和mppt
          // graph.copy([
          //   ...seletedCells.filter(
          //     (c) => c?.shape !== "mppt" && c?.shape !== "string-inverter"
          //   ),
          // ]);
          graph.copy(seletedCells);
        }
      } else {
        message.warning("未选择可复制的元素");
      }
    }
    return false;
  };

  // 处理剪切
  const handleCut = () => {
    if (graph) {
      if (graph.getSelectedCells().length) {
        const seletedCells = graph.getSelectedCells();
        if (seletedCells?.length) {
          // 复制的时候去掉组串和mppt
          // graph.copy([
          //   ...seletedCells.filter(
          //     (c) => c?.shape !== "mppt" && c?.shape !== "string-inverter"
          //   ),
          // ]);
          graph.copy(seletedCells);
        }
        graph.removeCells(graph.getSelectedCells());
        message.success("剪切成功");
      } else {
        message.warning("未选择可剪切的元素");
      }
    }
  };

  // 处理粘贴
  const handlePaste = () => {
    if (graph) {
      if (graph.isClipboardEmpty()) {
        message.info("剪贴板为空，不可粘贴");
      } else {
        graph.cleanSelection();
        const cells = graph.paste({ offset: { dx: 100, dy: 0 } });
        // cells?.map((c) => {
        //   if (c?.shape === "placeholder") {
        //     setPlaceholderText(graph, c?.id, "");
        //   }
        //   return c;
        // });
        graph.select(cells);
        message.success("粘贴成功");
      }
    }
  };

  useEffect(() => {
    if (graph && nodeEditType !== 1 && graph?.resetSelection) {
      graph.resetSelection();
    }
    if (graph && nodeEditType !== 3) {
      document.documentElement.style.cursor = "default";
    }
    if (graph && nodeEditType === 4) {
      document.documentElement.style.cursor = "text";
    }
  }, [nodeEditType]);

  useEffect(() => {
    tempSettingState = isSettingState;
    if (graph && isSettingState) {
      window.onkeyup = () => {
        keyPressed = false;
      };
      if (graph?.cleanHistory) {
        graph.cleanHistory();
      }
      if (graph?.enableHistory) {
        graph.enableHistory();
      }
      if (graph?.bindKey) {
        graph.bindKey(
          ["ctrl+c"],
          () => {
            if (graph.getSelectedCellCount()) handleCopy();
          },
          "keyup"
        );
        graph.bindKey(
          ["ctrl+v"],
          () => {
            handlePaste();
          },
          "keyup"
        );
        graph.bindKey(
          ["ctrl+x"],
          () => {
            if (graph.getSelectedCellCount()) handleCut();
          },
          "keyup"
        );
        graph.bindKey(
          ["ctrl+z"],
          () => {
            if (graph.canUndo() && tmpUndoEnable) handleUndo();
          },
          "keyup"
        );
        graph.bindKey(
          ["ctrl+y"],
          () => {
            if (graph.canRedo() && tmpRedoEnable) handleRedo();
          },
          "keyup"
        );
        /*
      // 基座启动会出现问题先隐藏
      // graph.bindKey(["ctrl+d"], (e) => {
      //   console.log(keyPressed);
      //   e.preventDefault();
      //   if (graph && graph.getSelectedCellCount() && !keyPressed) {
      //     keyPressed = true;
      //     handleCopy();
      //     handlePaste();
      //   }
      // });
      */
        graph.bindKey(
          ["ctrl+s"],
          (e) => {
            e.preventDefault();
            if (!keyPressed) {
              keyPressed = true;
              onSavingDiagram();
            }
          },
          "keydown"
        );
        graph.bindKey(["esc"], () => {
          setCurNode(null);
          graph.cleanSelection();
          // eslint-disable-next-line no-unused-expressions
          document.getElementsByClassName("x6-widget-transform no-orth-resize")
            ?.length &&
            document
              .getElementsByClassName("x6-widget-transform no-orth-resize")[0]
              .remove();
        });
        graph.bindKey(["delete", "Backspace"], (e) => {
          e.preventDefault();
          if (graph.getSelectedCells()?.length) setShowDeleteConfirm(true);
        });
      }
    }
    if (graph && !isSettingState && graph?.unbindKey) {
      graph.cleanClipboard();
      setPasteEnabled(false);
      graph.disableHistory();
      graph.unbindKey("ctrl+c");
      graph.unbindKey("ctrl+v");
      graph.unbindKey("ctrl+x");
      graph.unbindKey("ctrl+z");
      graph.unbindKey("ctrl+y");
      graph.unbindKey("ctrl+d");
      graph.unbindKey("ctrl+s");
      graph.unbindKey("esc");
      graph.unbindKey(["delete", "Backspace"]);
      graph.unbindKey(["up"]);
      graph.unbindKey(["down"]);
      graph.unbindKey(["left"]);
      graph.unbindKey(["right"]);
    }
  }, [isSettingState]);

  useEffect(() => {
    if (!graph) return;
    if (graph?.unbindKey) {
      if (isSettingState && curNode) {
        graph.bindKey(["up"], (e) => {
          e.preventDefault();
          if (graph.getSelectedCells()?.length)
            graph.getSelectedCells().forEach((cell) => cell.translate(0, -1));
        });
        graph.bindKey(["down"], (e) => {
          e.preventDefault();
          if (graph.getSelectedCells()?.length)
            graph.getSelectedCells().forEach((cell) => cell.translate(0, 1));
        });
        graph.bindKey(["left"], (e) => {
          e.preventDefault();
          if (graph.getSelectedCells()?.length)
            graph.getSelectedCells().forEach((cell) => cell.translate(-1, 0));
        });
        graph.bindKey(["right"], (e) => {
          e.preventDefault();
          if (graph.getSelectedCells()?.length)
            graph.getSelectedCells().forEach((cell) => cell.translate(1, 0));
        });
      } else {
        graph.unbindKey(["up"]);
        graph.unbindKey(["down"]);
        graph.unbindKey(["left"]);
        graph.unbindKey(["right"]);
      }
    }
  }, [graph, curNode, isSettingState]);

  useEffect(() => {
    if (graph) {
      // eslint-disable-next-line no-unused-expressions
      const [dom] = Array.from(
        document.getElementsByClassName(
          "x6-graph-scroller x6-graph-scroller-paged"
        )
      );
      if (dom)
        (dom as HTMLElement).onwheel = (e) => {
          if (e.shiftKey) {
            e.preventDefault();
            const tx = graph.getScrollbarPosition().left;
            graph.setScrollbarPosition(tx + e.deltaY, null);
          }
        };
      graph.on("scale", ({ sx }) => {
        setCurZoom(Number(sx.toFixed(1)));
      });
      graph.on("history:change", () => {
        setUndoEnabled(graph.canUndo());
        setRedoEnabled(graph.canRedo());
      });
      graph.on("selection:changed", ({ selected }) => {
        if (selected.length) {
          setCopyEnabled(true);
          setPasteEnabled(true);
          setDeleteEnabled(true);
          setCutEnabled(true);
        } else {
          setCopyEnabled(false);
          if (graph.isClipboardEmpty()) setPasteEnabled(false);
          else setPasteEnabled(true);
          setDeleteEnabled(false);
          setCutEnabled(false);
        }
      });
      // 保证撤销删除节点逻辑正确
      graph.on("node:removed", () => {
        if (!graph.hasCell(curNode)) {
          setCurNode(null);
        }
      });

      graph.on("node:dblclick", ({ e, node }) => {
        if (node?.shape === "rect") {
          setNodeTobeRelated(node);
          return;
        }
        if (node?.shape !== "text-block" || !tempSettingState) return;
        graph.startBatch("set-text");
        setUndoEnabled(false);
        setRedoEnabled(false);
        const color = node.getAttrByPath("label/style/color");
        const size = node.getAttrByPath("label/style/fontSize");
        node.setAttrByPath("label/style", { opacity: 0 });
        node.addTools({
          name: "node-editor",
          args: {
            event: e,
            attrs: {
              width: "100%",
              height: "100%",
              backgroundColor: "#DBE9FF00",
              color: color || "#191c26ff",
              fontSize: size || 14,
            },
            getText: ({ cell }) => {
              return cell.getAttrByPath("label/text");
            },
            setText: ({ cell, value }: { cell: Cell; value: string }) => {
              cell.setAttrByPath("label/text", value);
              cell.setAttrByPath("body", {
                fill: "#fff0",
                strokeColor: "#878789FF",
                strokeWidth: 1,
              });
              cell.setAttrByPath("label/style", {
                opacity: 1,
                fontWeight: 400,
              });
              setUndoEnabled(true);
              setRedoEnabled(true);
              graph.stopBatch("set-text");
            },
          },
        });
      });
      graph.on("blank:click", ({ x, y, e }) => {
        if (tempNodeEditType === 4) {
          graph.startBatch("add-text");
          const node = graph.addNode({
            x: x,
            y: y,
            shape: "text-block",
            width: 100,
            height: 40,
            attrs: {
              body: {
                fill: "#DBE9FF00",
                strokeColor: "#878789FF",
                strokeWidth: 1,
              },
            },
          });
          node.addTools({
            name: "node-editor",
            args: {
              attrs: {
                width: "100%",
                height: "100%",
                backgroundColor: "#DBE9FF00",
              },
              setText: ({ cell, value }: { cell: Cell; value: string }) => {
                cell.setAttrByPath("label/text", value);
                cell.setAttrByPath("body", {
                  fill: "#fff0",
                  strokeColor: "#878789FF",
                  strokeWidth: 1,
                });
                cell.setAttrByPath("label/style", {
                  fontSize: 16,
                  color: "#191c26ff",
                });
              },
            },
          });
          // 设置文本默认颜色
          node.setAttrByPath("label/style", { color: "#191c26ff" });
          setNodeEditType(0);
          document.documentElement.style.cursor = "default";
          graph.stopBatch("add-text");
        }
        // 当在连线状态并且未点击元素时，在点击位置处新增一个可拖拽的线段（母线）
        if (tempNodeEditType === 3) {
          graph.addEdge({
            source: { x, y },
            target: { x: x + 100, y },
            attrs: {
              line: {
                stroke: "#525f7cff",
                strokeWidth: 2,
                targetMarker: null,
                sourceMarker: null,
                radius: 2,
              },
            },
          });
        }
      });
      graph.on("edge:mouseenter", ({ cell }) => {
        if (tempNodeEditType !== 3) return;
        cell.addTools([
          {
            name: "source-arrowhead",
          },
          {
            name: "target-arrowhead",
            args: {
              attrs: {
                fill: "red",
              },
            },
          },
        ]);
      });
      graph.on("edge:mouseleave", ({ cell }) => {
        cell.removeTool("source-arrowhead");
        cell.removeTool("target-arrowhead");
      });
      if (graph?.isClipboardEmpty && graph?.isClipboardEmpty()) {
        setPasteEnabled(false);
      }
    }

    // 清除graph的监听事件
    return () => {
      if (graph) {
        graph.off("scale");
        graph.off("history:change");
        graph.off("selection:changed");
        graph.off("node:removed");
        graph.off("node:dblclick");
        graph.off("blank:click");
        graph.off("edge:mouseenter");
        graph.off("edge:mouseleave");
      }
    };
  }, [graphRef.current]);

  useEffect(() => {
    tmpUndoEnable = undoEnabled;
  }, [undoEnabled]);

  useEffect(() => {
    tmpRedoEnable = redoEnabled;
  }, [redoEnabled]);

  return (
    <Space
      align="center"
      split={isSettingState ? <Divider type="vertical" /> : <></>}
      style={{
        pointerEvents: !!currentSelectedType ? "none" : "auto",
        height: "3.25rem",
      }}
    >
      <div
        className={styles.editItemWrapper}
        style={{
          display: isSettingState ? "flex" : "none",
        }}
      >
        <div
          className={styles.editItem}
          style={{
            filter: `opacity(${undoEnabled ? 1 : 0.4})`,
          }}
          onClick={() => {
            if (undoEnabled) {
              handleUndo();
            }
          }}
        >
          <span style={undoEnabled ? {} : { background: "unset" }}>
            <span
              style={{
                width: "1rem",
                height: "1rem",
                // transform: "rotateY(180deg)",
              }}
            >
              <UndoIcon />
            </span>
          </span>
          <span>撤销</span>
        </div>
        <div
          className={styles.editItem}
          style={{
            filter: `opacity(${redoEnabled ? 1 : 0.4})`,
          }}
          onClick={() => {
            if (redoEnabled) {
              handleRedo();
            }
          }}
        >
          <span style={redoEnabled ? {} : { background: "unset" }}>
            <span style={{ width: "1rem", height: "1rem" }}>
              <RedoIcon />
            </span>
          </span>
          <span>反撤销</span>
        </div>
      </div>
      <div
        className={styles.editItemWrapper}
        style={{ display: isSettingState ? "flex" : "none" }}
      >
        <div
          className={
            nodeEditType === 4 ? styles.editItemActive : styles.editItem
          }
          onClick={() => {
            if (nodeEditType === 4) {
              setNodeEditType(0);
            } else {
              setNodeEditType(4);
            }
          }}
        >
          <span>
            <span style={{ width: "1rem", height: "1rem" }}>
              <TextIcon />
            </span>
          </span>
          <span>文本框</span>
        </div>
        <div
          className={styles.editItem}
          style={{ filter: `opacity(${cutEnabled ? 1 : 0.4})`, color: "red" }}
          onClick={() => {
            if (cutEnabled) {
              handleCut();
            }
          }}
        >
          <span style={cutEnabled ? {} : { background: "unset" }}>
            <span style={{ width: "1rem", height: "1rem" }}>
              <CutIcon />
            </span>
          </span>
          <span>剪切</span>
        </div>
        <div
          className={styles.editItem}
          style={{ filter: `opacity(${copyEnabled ? 1 : 0.4})` }}
          onClick={() => {
            if (copyEnabled) {
              handleCopy();
            }
          }}
        >
          <span style={copyEnabled ? {} : { background: "unset" }}>
            <span style={{ width: "1rem", height: "1rem" }}>
              <CopyIcon />
            </span>
          </span>
          <span>复制</span>
        </div>
        <div
          className={styles.editItem}
          style={{ filter: `opacity(${pasteEnabled ? 1 : 0.4})` }}
          onClick={() => {
            if (pasteEnabled) {
              handlePaste();
            }
          }}
        >
          <span style={pasteEnabled ? {} : { background: "unset" }}>
            <span style={{ width: "1rem", height: "1rem" }}>
              <PasteIcon />
            </span>
          </span>
          <span>粘贴</span>
        </div>
        <div
          className={styles.editItem}
          style={{
            filter: `opacity(${deleteEnabled ? 1 : 0.4})`,
          }}
          onClick={() => {
            if (
              graph?.getSelectedCells &&
              graph.getSelectedCells() &&
              deleteEnabled
            ) {
              setShowDeleteConfirm(true);
            }
          }}
        >
          <span style={deleteEnabled ? {} : { background: "unset" }}>
            <span style={{ width: "1rem", height: "1rem" }}>
              <DeleteIcon />
            </span>
          </span>
          <span>删除</span>
        </div>
      </div>
      <div
        className={`${styles["nodeEdit"]} ${styles["editItemWrapper"]}`}
        style={{ display: isSettingState ? "flex" : "none" }}
      >
        <div
          className={
            nodeEditType === 1 ? styles.editItemActive : styles.editItem
          }
          onClick={() => {
            if (nodeEditType === 1) {
              setNodeEditType(0);
            } else {
              setNodeEditType(1);
            }
          }}
        >
          <span className={styles.selectIcon}>
            <span style={{ width: "1rem", height: "1rem" }}>
              <SelectIcon />
            </span>
          </span>
          <span>选择</span>
        </div>
        <div
          className={
            nodeEditType === 2 ? styles.editItemActive : styles.editItem
          }
          onClick={() => {
            if (nodeEditType === 2) {
              setNodeEditType(0);
            } else {
              setNodeEditType(2);
            }
          }}
        >
          <span className={styles.dragIcon}>
            <span style={{ width: "1rem", height: "1rem" }}>
              <DragIcon />
            </span>
          </span>
          <span>拖拽</span>
        </div>
        <div
          className={
            nodeEditType === 3 ? styles.editItemActive : styles.editItem
          }
          onClick={() => {
            if (nodeEditType === 3) {
              setNodeEditType(0);
            } else {
              setNodeEditType(3);
            }
          }}
        >
          <span className={styles.connectIcon}>
            <span style={{ width: "1rem", height: "1rem" }}>
              <ConnectIcon />
            </span>
          </span>
          <span>连线</span>
        </div>
      </div>
      {!subGraphData && (
        <div
          className={styles.editItemWrapper}
          style={{
            display: isSettingState ? "flex" : "none",
          }}
        >
          <div
            className={
              nodeEditType === 5 ? styles.editItemActive : styles.editItem
            }
            style={{
              filter: `opacity(1)`,
            }}
            onClick={() => {
              if (nodeEditType === 5) {
                setNodeEditType(0);
              } else {
                setHotZoneVisible(true);
                setNodeEditType(5);
              }
            }}
          >
            <span className={styles.relateIcon}>
              <span
                style={{
                  width: "1rem",
                  height: "1rem",
                }}
              >
                <RelateIcon />
              </span>
            </span>
            <span>关联</span>
          </div>
          <div
            className={
              !hotZoneVisible ? styles.editItemActive : styles.editItem
            }
            onClick={toggleHotZoneVisible}
          >
            <span className={styles.eyeIcon}>
              <span style={{ width: "1rem", height: "1rem" }}>
                <EyeIcon />
              </span>
            </span>
            <span>隔离</span>
          </div>
        </div>
      )}
      <div
        className={styles.otherEdit}
        style={{ display: isSettingState ? "flex" : "none" }}
      >
        <Dropdown
          overlay={<ViewOperation />}
          disabled={nodeEditType === 1}
          overlayClassName={styles.view}
        >
          <div
            onClick={(e) => e.preventDefault()}
            style={{
              width: "3.5rem",
              cursor: "pointer",
              textAlign: "center",
              filter: nodeEditType === 1 ? "opacity(0.4)" : "opacity(1)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {(curZoom * 100).toFixed(0)}
              <DropdownIcon
                style={{
                  width: "0.88rem",
                  height: "0.88rem",
                  display: "inline-block",
                  marginLeft: "0.13rem",
                }}
              />
            </div>
            <Space
              style={{
                fontSize: "0.75rem",
                fontFamily: "PingFangSC-Regular, PingFang SC",
                fontWeight: "400",
                color: "#333333",
                lineHeight: "0.75rem",
              }}
            >
              视图
            </Space>
          </div>
        </Dropdown>
      </div>
      <Confirm
        icon={DeleteImg}
        open={showDeleteConfirm}
        autoClose
        onClose={() => {
          setShowDeleteConfirm(false);
        }}
        title={<div>是否确认删除</div>}
        okButtonProps={{ danger: true }}
        okText={"确定"}
        cancelText={"取消"}
        onOk={() => {
          handleDelete();
        }}
        onCancel={() => {
          setShowDeleteConfirm(false);
        }}
      />
    </Space>
  );
};

export default OperationArea;
