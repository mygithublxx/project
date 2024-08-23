import React, { useEffect, useState } from "react";
import { Button, Input, Modal, Spin } from "@gw/web-basic-components";
import SearchImg from "../../assets/sub-diagram/search.png";
import styles from "./index.module.less";
import AddBtn from "./add-btn";
import Card from "./card";
import { SubListItem, SubListRes } from "./dto";
import useRequest from "../../utils/use-request-temp";
import apis from "../../api";
import checkPermission from "../../utils/checkPermission";
import { DiagramPermissionEnum } from "../../dto";

interface IProps {
  subGraphData: any;
  setSubGraphData: (data: any) => void;
  setSubGraphName: (v: string) => void;
  setIsSettingState: (v: boolean) => void;
  currentProject?: any;
  setWiringId: (v: string) => void;
  permissions?: any[];
}

// 分图中心
const SubDiagramCenter = (props: IProps) => {
  const {
    subGraphData,
    setSubGraphData,
    setIsSettingState,
    currentProject,
    setWiringId,
    setSubGraphName,
    permissions,
  } = props;

  const addPermission = checkPermission(
    permissions,
    DiagramPermissionEnum.SUB_DIAGRAM_ADD
  );
  const deletePermission = checkPermission(
    permissions,
    DiagramPermissionEnum.SUB_DIAGRAM_DELETE
  );
  const viewPermission = checkPermission(
    permissions,
    DiagramPermissionEnum.SUB_DIAGRAM_VIEW
  );

  const [loading, setLoading] = useState<boolean>(false);
  const toggleLoading = () => {
    setLoading((prev) => !prev);
  };
  const [visible, setVisible] = useState<boolean>(false);
  const toggleVisible = () => {
    setVisible((prev) => !prev);
  };

  const [subDiagramList, setSubDiagramList] = useState<SubListItem[]>([]);

  const [searchValue, setSearchValue] = useState<string>("");

  // 获取所有分图
  const [, fetchSubDiagramList] = useRequest(apis.wiring.listSub, {
    parallel: false,
  });

  const onCreate = () => {
    setVisible(false);
    setSubGraphData({});
    setIsSettingState(true);
    setWiringId("");
    setSubGraphName("未命名分图");
  };

  const getSubListFn = () => {
    fetchSubDiagramList({
      category: currentProject?.category,
      thingProjectId: currentProject?.id,
    }).then((res: SubListRes) => {
      setSubDiagramList(res?.dataList || []);
    });
  };

  useEffect(() => {
    if (currentProject) {
      getSubListFn();
    }
  }, [currentProject]);

  const list =
    subDiagramList.filter((item) => {
      return item.name.includes(searchValue);
    }) || [];

  const reversedList = list.reverse();

  // 清空搜索框
  useEffect(() => {
    if (!visible) {
      setSearchValue("");
    }
  }, [visible]);

  if (!viewPermission) {
    return null;
  }

  return (
    <>
      <Button type="primary" ghost onClick={toggleVisible}>
        分图中心
      </Button>
      <Modal
        title="分图中心"
        open={visible}
        onCancel={toggleVisible}
        footer={
          <Button type="primary" onClick={toggleVisible}>
            确认
          </Button>
        }
        className={styles.wrap}
        width={"63.75rem"}
        destroyOnClose={true}
      >
        <Spin spinning={loading}>
          <div className={styles["diagram-container"]}>
            <div className={styles.search}>
              <Input
                className={styles.input}
                prefix={<img src={SearchImg} className={styles.icon} alt="" />}
                placeholder="请输入分图名称"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value?.trim())}
              />
            </div>
            <div className={styles.list}>
              {addPermission && <AddBtn onCreate={onCreate} />}
              {reversedList.map((item, index) => {
                return (
                  <Card
                    data={item}
                    key={item.wiringId + index}
                    refresh={getSubListFn}
                    toggleLoading={toggleLoading}
                    subGraphData={subGraphData}
                    setSubGraphData={setSubGraphData}
                    toggleVisible={toggleVisible}
                    deletePermission={deletePermission}
                  />
                );
              })}
            </div>
          </div>
        </Spin>
      </Modal>
    </>
  );
};

export default SubDiagramCenter;
