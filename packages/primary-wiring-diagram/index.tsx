import React, { useCallback, useEffect, useState } from "react";
import MetaList from "./MetaList";
import Droppable from "./Droppable";
import { DropCallbackParams } from "./hooks/useDropCallback";
import Icon from "./icons/Icon";
import { nanoid } from "nanoid";
import styles from "./index.module.less";
import classNames from "classnames";
import { MetaItem, PrimaryWiringDiagramProps } from "./dto";
import { Button } from "@gw/web-basic-components";
import debugCreator from "debug";

const debug = debugCreator("web-business-components:primary-wiring-diagram");

// eslint-disable-next-line no-shadow
enum DiagramStatus {
  "edit",
  "save",
}

const PrimaryWiringDiagram = (props: PrimaryWiringDiagramProps) => {
  const [metaList, setMetaList] = useState<MetaItem[]>(props.initData);
  const [status, setStatus] = useState<DiagramStatus>(DiagramStatus.edit);

  /**
   * 新增或者移动图形callback
   */
  const handleDrop = useCallback(
    async (e: DropCallbackParams) => {
      debug("drop callback %O", e);
      if (!e.uuid) {
        let isAllowAdd = true;
        if (typeof props.onAdd === "function") {
          isAllowAdd = await props.onAdd();
        }
        isAllowAdd &&
          setMetaList([
            ...metaList,
            {
              id: e.id,
              uuid: nanoid(8),
              x: e.x,
              y: e.y,
              width: e.width,
              height: e.height,
            },
          ]);
      } else {
        debug("move %O", e);
        const meta = metaList.find((m) => m.uuid === e.uuid);
        meta.x = e.x;
        meta.y = e.y;
        setMetaList(metaList.slice(0));
      }
    },
    [metaList, props.width, props.height, props.onAdd]
  );

  /**
   * 图形尺寸变化结束callback
   */
  const handleResizeEnd = useCallback(
    (e: DropCallbackParams) => {
      debug("resize end callback %O, %O", metaList, e);
      const meta = metaList.find((m) => m.uuid === e.uuid);
      meta.x = e.x;
      meta.y = e.y;
      meta.width = e.width;
      meta.height = e.height;
      setMetaList(metaList.slice(0));
    },
    [metaList]
  );

  const handleEdit = useCallback(
    (uuid: string) => {
      if (typeof props.onEdit === "function") {
        props.onEdit(metaList.find((meta) => meta.uuid === uuid));
      }
    },
    [props.onEdit, metaList]
  );

  const handleSetAndSave = useCallback(() => {
    const nStatus =
      status === DiagramStatus.edit ? DiagramStatus.save : DiagramStatus.edit;
    setStatus(nStatus);
    if (status === DiagramStatus.save && typeof props.onSave === "function") {
      props.onSave(metaList);
    }
  }, [metaList, status, props.onSave]);

  return (
    <div
      className={classNames(styles.wiringDiagram)}
      style={{ width: props.width, height: props.height }}
    >
      {status === DiagramStatus.save ? (
        <MetaList
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            top: 0,
            zIndex: 1,
          }}
        />
      ) : null}
      <Droppable
        onDrop={handleDrop}
        className={styles.canvas}
        safeArea={{ width: props.width, height: props.height }}
      >
        {metaList.map((meta) => {
          return (
            <Icon
              {...meta}
              key={meta.uuid}
              type={"operational"}
              onResizeEnd={handleResizeEnd}
              safeArea={{ width: props.width, height: props.height }}
              onEdit={handleEdit}
              draggable={status === DiagramStatus.save}
              Edit={props.Edit}
            />
          );
        })}
      </Droppable>
      <Button className={styles.button} onClick={handleSetAndSave}>
        {status === DiagramStatus.edit ? "设置" : "保存"}
      </Button>
    </div>
  );
};

export default PrimaryWiringDiagram;
