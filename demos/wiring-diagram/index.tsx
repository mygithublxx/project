import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./index.module.less";
import {
  WiringDiagram,
  EditorContext,
  NameEditor,
  checkPermission,
} from "../../packages/wiring-diagram/index";
import { Button } from "@gw/web-basic-components";
import ProjectSelector from "./project-selector";
import useRequest from "../../packages/wiring-diagram/utils/use-request-temp";
import apis from "../../packages/wiring-diagram/api";
import SubDiagramCenter from "@/wiring-diagram/components/sub-diagram-center";
import {
  DiagramPermissionEnum,
  usePermissions,
} from "@gw/web-business-components";

const WiringDiagramDemo = () => {
  const actionRef = useRef(null);
  const [currentProject, setCurrentProject] = useState(null);
  const [wiringId, setWiringId] = useState<string>("");
  const { editorState, setEditorState } = React.useContext(EditorContext);
  const { isSettingState } = editorState;
  const setIsSettingState = (v: boolean) => {
    setEditorState({
      ...editorState,
      isSettingState: v,
    });
  };
  const [graphData, setGraphData] = useState(null);
  const [subGraphData, setSubGraphData] = useState(null);
  const [subGraphName, setSubGraphName] = useState("未命名");

  const [loading, setLoading] = useState<boolean>(false);

  const toggleLoading = () => {
    setLoading((prev) => !prev);
  };

  // 获取绘制的接线图
  const [, fetchGridCanvas] = useRequest<any, any>(apis.wiring.getWiring, {
    parallel: false,
  });

  const firstGetRef = useRef(true);

  const getGridCanvas = () => {
    fetchGridCanvas({
      thingProjectId: currentProject.id,
      category: currentProject.category,
    }).then((res) => {
      setGraphData(res);
      setWiringId(res?.wiringId);
      if (firstGetRef.current) {
        firstGetRef.current = false;
      }
    });
  };

  useEffect(() => {
    if (isSettingState === false && firstGetRef.current === false) {
      getGridCanvas();
    }
  }, [isSettingState]);

  useEffect(() => {
    if (currentProject) {
      getGridCanvas();
      setSubGraphData(null);
    }
  }, [currentProject]);

  const onCancel = () => {
    if (actionRef?.current?.onCancel) {
      actionRef.current.onCancel();
    }
  };

  const onSave = () => {
    if (actionRef?.current?.onSave) {
      toggleLoading();
      actionRef.current.onSave(toggleLoading);
    }
  };

  const finalGraphData = useMemo(() => {
    return subGraphData || graphData;
  }, [subGraphData, graphData]);

  useEffect(() => {
    if (finalGraphData) {
      const defaultName = subGraphData ? "未命名分图" : "未命名";
      setSubGraphName(finalGraphData?.name || defaultName);
    }
  }, [finalGraphData, subGraphData]);

  // 权限控制
  const [list] = usePermissions();

  const mainEditPermission = checkPermission(
    list,
    DiagramPermissionEnum.DIAGRAM_EDIT
  );
  const subEditPermission = checkPermission(
    list,
    DiagramPermissionEnum.SUB_DIAGRAM_EDIT
  );

  const isSub = !!subGraphData;
  const editPermission = isSub ? subEditPermission : mainEditPermission;

  const parsedCellsJson = useMemo(() => {
    return finalGraphData?.cellsJson
      ? JSON.parse(finalGraphData?.cellsJson)
      : null;
  }, [finalGraphData?.cellsJson]);

  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        {isSettingState && (
          <NameEditor
            name={subGraphName}
            setName={setSubGraphName}
            key={"name" + (subGraphData?.name || "")}
          />
        )}
        <div className={styles["small-container"]}>
          <ProjectSelector
            currentProject={currentProject}
            setCurrentProject={setCurrentProject}
            isSettingState={isSettingState}
            hide={isSettingState}
          />
          {!isSettingState && (
            <div className={styles["sub-name"]}>{subGraphName}</div>
          )}
        </div>
        <div className={styles["operation-area"]}>
          {!isSettingState && (
            <SubDiagramCenter
              subGraphData={subGraphData}
              setSubGraphData={setSubGraphData}
              setSubGraphName={setSubGraphName}
              setIsSettingState={setIsSettingState}
              currentProject={currentProject}
              setWiringId={setWiringId}
              permissions={list}
            />
          )}
          <Button
            type="ghost"
            onClick={onCancel}
            style={{
              display: isSettingState ? "inline-block" : "none",
            }}
          >
            取消
          </Button>
          <Button
            loading={loading}
            type="primary"
            onClick={onSave}
            style={{
              display: isSettingState ? "inline-block" : "none",
            }}
          >
            保存
          </Button>
          {
            <Button
              type="primary"
              onClick={() => setIsSettingState(true)}
              style={{
                display: !isSettingState ? "inline-block" : "none",
              }}
              disabled={!currentProject?.id}
            >
              设置
            </Button>
          }
        </div>
      </div>
      <div className={styles.graph}>
        {graphData && (
          <WiringDiagram
            graphData={parsedCellsJson}
            codeList={finalGraphData?.codeList as any}
            currentProject={currentProject}
            needSetting
            isSettingState={isSettingState}
            actionRef={actionRef}
            wiringId={wiringId}
            subGraphData={subGraphData}
            setSubGraphData={setSubGraphData}
            subName={{ subGraphName, setSubGraphName }}
            hotZoneList={finalGraphData?.hotRelInfoList}
          />
        )}
      </div>
    </div>
  );
};

export default WiringDiagramDemo;
