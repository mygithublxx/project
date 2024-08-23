import React, { useEffect, useState } from "react";
import { MetaIconComponent } from "../dto";
import useMouseMoveCallback from "../../hooks/useMouseMoveCallback";
import classNames from "classnames";
import styles from "../../index.module.less";
import { HorizonLineProps } from "./HorizonLine";

const VerticalLine: MetaIconComponent<HorizonLineProps> = ({
  len,
  onResize,
  uuid,
  draggable,
}) => {
  const [isInstance, setIsInstance] = useState(Boolean(uuid) && draggable);
  const [moving, setMoving] = useState(false);
  const moveLeft = useMouseMoveCallback((e, finished) => {
    onResize({ deltaX: 0, deltaY: e.deltaY, direction: "n", finished });
    setMoving(!finished);
  });
  const moveRight = useMouseMoveCallback((e, finished) => {
    onResize({ deltaX: 0, deltaY: e.deltaY, direction: "s", finished });
    setMoving(!finished);
  });

  useEffect(() => {
    setIsInstance(Boolean(uuid) && draggable);
  }, [draggable]);

  return (
    <div style={{ height: "100%", display: "flex", justifyContent: "center" }}>
      <svg
        width={10}
        height={len}
        className={classNames(
          isInstance ? styles.horizonLine : undefined,
          moving ? styles.hover : undefined
        )}
        style={{ alignSelf: "center" }}
      >
        <path d={`M 5 10 l 0 ${len - 20}`} stroke="black" strokeWidth="2" />
        <circle
          className={styles.circle}
          cx="5"
          cy="10"
          r="5"
          fill="transparent"
          style={{
            cursor: "ns-resize",
            pointerEvents: isInstance ? "auto" : "none",
          }}
          {...moveLeft}
        />
        <circle
          className={styles.circle}
          cx="5"
          cy={`${len - 10}`}
          r="5"
          fill="transparent"
          style={{
            cursor: "ns-resize",
            pointerEvents: isInstance ? "auto" : "none",
          }}
          {...moveRight}
        />
      </svg>
    </div>
  );
};

VerticalLine.metaName = "纵向电路";
VerticalLine.id = 2;

export default VerticalLine;
