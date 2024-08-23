import React, { useEffect, useMemo, useState } from "react";
import libraryCollapseIcon from "../../assets/operation-area/library-collapse.png";
import styles from "./index.module.less";
import { wiringItemList } from "../../const";
import Modal from "../business/modal";

interface IProps {
  isSettingState: boolean;
  currentSelectedType: string;
  setCurrentSelectedType: (type: string) => void;
  setCurNode: (node: any) => void;
  isEditing: boolean;
}

const ItemLibrary = ({
  isSettingState,
  currentSelectedType,
  setCurrentSelectedType,
  setCurNode,
  isEditing,
}: IProps) => {
  // 元件库是否展开
  const [isCollapse, setIsCollapse] = useState<boolean>(false);

  // 是否打开子图元选择弹框
  const [isShowChildModal, setIsShowChildModal] = useState<boolean>(false);

  const toggleChildModal = () => {
    setIsShowChildModal((prev) => !prev);
  };

  useEffect(() => {
    if (isSettingState) {
      setIsCollapse(false);
    }
  }, [isSettingState]);

  const onClick = (e) => {
    setCurNode(null);
    setCurrentSelectedType(e.key);
    if (e.children) {
      toggleChildModal();
    }
  };

  useEffect(() => {
    const cursor = document.createElement("img");
    const foundCursor = document.getElementById("element-cursor");

    const clickableElement = document.getElementById("graph-container");
    const clickableArea = clickableElement?.getBoundingClientRect();

    const clear = () => {
      if (foundCursor && foundCursor.parentNode) {
        foundCursor.parentNode.removeChild(foundCursor);
      }
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "auto";
    };

    const handleMouseMove = (e) => {
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";

      // 任何非点击区域都会将当前选中的元件类型隐藏
      if (
        e.pageX < clickableArea.left - 20 ||
        e.pageX > clickableArea.right - 20 ||
        e.pageY < clickableArea.top - 20 ||
        e.pageY > clickableArea.bottom - 20
      ) {
        cursor.style.opacity = "0";
        document.body.style.cursor = "default";
      } else {
        cursor.style.opacity = "1";
        document.body.style.cursor = "none";
      }
    };

    if (isSettingState && currentSelectedType) {
      const expandedWiringItemList = wiringItemList.reduce((acc, item) => {
        if (item.children) {
          return acc.concat(item.children);
        }
        return acc.concat(item);
      }, []);
      let svg;
      const item = expandedWiringItemList.find(
        (i) => i.key === currentSelectedType
      );

      const irregularItemKeyList = wiringItemList
        .filter((i) => {
          return i.children;
        })
        .map((i) => i.key);

      if (isShowChildModal) {
        return;
      } else {
        svg = item?.icon;
        // 让鼠标变成当前选中的元件类型
        cursor.id = "element-cursor";
        cursor.src = svg as string;
        cursor.style.position = "absolute";
        cursor.style.width = "40px";
        cursor.style.height = "40px";
        cursor.style.zIndex = "9999";
        cursor.style.pointerEvents = "none";
        document.body.appendChild(cursor);
        document.body.style.cursor = "none";
        document.addEventListener("mousemove", handleMouseMove);
      }
    } else {
      clear();
    }

    return () => {
      clear();
    };
  }, [currentSelectedType, isSettingState, isShowChildModal]);

  // 监听整个页面的点击事件，如果发生了任何点击事件，就将当前选中的元件类型置空
  // useEffect(() => {
  //   const handleClick = (event) => {
  //     console.log("click");
  //     const elementToAvoid = document.getElementById("item-selector-modal");
  //     if (elementToAvoid && !elementToAvoid.contains(event.target)) {
  //       console.log("页面被点击，但避开了特定元素");
  //       if (currentSelectedType) {
  //         setCurrentSelectedType("");
  //       }
  //     }
  //   };
  //   document.addEventListener("click", handleClick);
  //   return () => {
  //     document.removeEventListener("click", handleClick);
  //   };
  // }, [currentSelectedType]);

  const parentItem = useMemo(() => {
    return wiringItemList.find((item) => item.key === currentSelectedType);
  }, [wiringItemList, currentSelectedType]);

  const childrenList = useMemo(() => {
    return (
      wiringItemList.find((item) => item.key === currentSelectedType)
        ?.children || []
    );
  }, [wiringItemList, currentSelectedType]);

  const onCancel = () => {
    toggleChildModal();
    setCurrentSelectedType("");
  };

  useEffect(() => {
    const element = document.getElementById("item-library-wrapper");
    if (element && isSettingState) {
      element.scrollTop = 0;
    }
  }, [isSettingState]);

  const containerWidth = useMemo(() => {
    if (isSettingState) {
      return isCollapse ? 0 : "12rem";
    } else {
      return 0;
    }
  }, [isSettingState, isCollapse]);

  return (
    <div
      className={styles.itemLibrary}
      style={{
        // ...libraryStyles,
        width: containerWidth,
        minWidth: containerWidth,
      }}
    >
      <div
        className={styles.collapseIcon}
        onClick={() => setIsCollapse(!isCollapse)}
        style={{
          display: isEditing ? "none" : "flex",
        }}
      >
        <img
          src={libraryCollapseIcon}
          style={{
            transform: `rotate(${isCollapse ? "180deg" : "0deg"})`,
          }}
        />
      </div>
      <div
        className={styles.wrapper}
        id="item-library-wrapper"
        style={{
          visibility: isCollapse ? "hidden" : "visible",
        }}
      >
        {wiringItemList &&
          wiringItemList.map((l, i) => (
            <div
              className={styles.itemWrapper}
              data-type={l.key}
              key={i}
              onClick={() => {
                onClick(l);
              }}
            >
              <img src={l.icon as string} />
              <span>{l.name}</span>
            </div>
          ))}
      </div>
      <div
        className={styles.mask}
        style={{
          display: isEditing ? "block" : "none",
        }}
      />
      <Modal
        open={isShowChildModal}
        onCancel={onCancel}
        title={parentItem?.name || ""}
      >
        <div className={styles.modal} id="item-selector-modal">
          {childrenList?.map((l, i) => {
            return (
              <div
                className={styles.modalItemWrapper}
                data-type={l.key}
                key={i}
                onClick={() => {
                  setCurrentSelectedType(l.key);
                  toggleChildModal();
                }}
              >
                <img src={l.icon as string} />
                <span>{l.name}</span>
              </div>
            );
          })}
        </div>
      </Modal>
    </div>
  );
};

export default ItemLibrary;
