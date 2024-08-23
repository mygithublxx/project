import React, { useEffect, useState } from "react";
import { Input, Modal, Spin } from "@gw/web-basic-components";
import SearchImg from "../../assets/sub-diagram/search.png";
import styles from "./index.module.less";
import Card from "./card";
import { SubListItem, SubListRes } from "./dto";
import useRequest from "../../utils/use-request-temp";
import apis from "../../api";
import { Cell } from "@antv/x6";
import generateId from "../../utils/generateId";

interface IProps {
  currentProject?: any;
  nodeTobeRelated: Cell;
  setNodeTobeRelated: (data: Cell) => void;
  relatedSubListRef: any;
  graphRef: any;
}

// 关联分图
const SubDiagramRelate = (props: IProps) => {
  const {
    currentProject,
    nodeTobeRelated,
    setNodeTobeRelated,
    relatedSubListRef,
    graphRef,
  } = props;
  const graph = graphRef.current;

  const [loading, setLoading] = useState<boolean>(false);
  const toggleLoading = () => {
    setLoading((prev) => !prev);
  };

  const [subDiagramList, setSubDiagramList] = useState<SubListItem[]>([]);

  const [searchValue, setSearchValue] = useState<string>("");

  // 获取所有分图
  const [, fetchSubDiagramList] = useRequest(apis.wiring.listSub, {
    parallel: false,
  });

  const getSubListFn = () => {
    toggleLoading();
    fetchSubDiagramList({
      category: currentProject?.category,
      thingProjectId: currentProject?.id,
    })
      .then((res: SubListRes) => {
        setSubDiagramList(res?.dataList || []);
      })
      .finally(toggleLoading);
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
    if (!nodeTobeRelated) {
      setSearchValue("");
    }
  }, [nodeTobeRelated]);

  const onRelate = (wiringId: number, name: string) => {
    const node = nodeTobeRelated;
    // 随机十一位数字id
    const hotId = generateId();
    node.setData({ wiringId, name, hotId });
    // 在node的右上角添加名字
    node.setAttrs({
      label: {
        text: name,
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
    setNodeTobeRelated(null);
    const hotWiringIdList = graph
      .getNodes()
      .filter((item) => item.getData()?.hotId)
      .map((item) => item?.getData()?.wiringId)
      .filter(Boolean);
    relatedSubListRef.current = [...hotWiringIdList];
  };

  const currentWiringId = nodeTobeRelated?.getData()?.wiringId;
  const relatedSubList = relatedSubListRef.current || [];
  const notRelatedSubList = reversedList.filter((i) => {
    return !relatedSubList.includes(i.wiringId);
  });

  const dataList = reversedList.filter((item) => {
    //仅留下未关联和当前关联的分图
    const relatedSubDiagram = (relatedSubListRef.current || [])?.includes(
      nodeTobeRelated?.getData()?.wiringId
    );
    if (relatedSubDiagram) {
      return (
        item.wiringId === currentWiringId || notRelatedSubList.includes(item)
      );
    } else {
      return notRelatedSubList.includes(item);
    }
  });

  return (
    <Modal
      title="关联分图"
      open={!!nodeTobeRelated}
      onCancel={() => {
        setNodeTobeRelated(null);
      }}
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
            {dataList.map((item, index) => {
              const hasRelated =
                !notRelatedSubList.some((i) => i.wiringId === item.wiringId) ||
                nodeTobeRelated?.getData()?.wiringId === item?.wiringId;
              return (
                <Card
                  data={item}
                  key={item.wiringId + index}
                  onRelate={onRelate}
                  hasRelated={hasRelated}
                />
              );
            })}
          </div>
        </div>
      </Spin>
    </Modal>
  );
};

export default SubDiagramRelate;
