import React, { useEffect, useState } from "react";
import { MetaIconComponent } from "../dto";
import useMouseMoveCallback from "../../hooks/useMouseMoveCallback";
import classNames from "classnames";
import styles from "../../index.module.less";

export interface ResizeCallbackEvent {
  deltaX: number;
  deltaY: number;
  /**
   * 方向：上北下南左西右东
   */
  direction: "w" | "e" | "n" | "s";
  finished: boolean;
}

export interface HorizonLineProps {
  len?: number;
  uuid?: string;
  draggable: boolean;
  onResize?(e: ResizeCallbackEvent): void;
}

const HorizonLine: MetaIconComponent<HorizonLineProps> = ({
  len,
  onResize,
  uuid,
  draggable,
}) => {
  const [isInstance, setIsInstance] = useState(Boolean(uuid) && draggable);

  const [moving, setMoving] = useState(false);
  const moveLeft = useMouseMoveCallback((e, finished) => {
    onResize({ deltaX: e.deltaX, deltaY: 0, direction: "w", finished });
    setMoving(!finished);
  });
  const moveRight = useMouseMoveCallback((e, finished) => {
    onResize({ deltaX: e.deltaX, deltaY: 0, direction: "e", finished });
    setMoving(!finished);
  });

  useEffect(() => {
    setIsInstance(Boolean(uuid) && draggable);
  }, [draggable]);

  return (
    <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
      <svg
        width={len}
        height={10}
        className={classNames(
          isInstance ? styles.horizonLine : undefined,
          moving ? styles.hover : undefined
        )}
        style={{ alignSelf: "center" }}
      >
        <path d={`M 10 5 l ${len - 20} 0`} stroke="black" strokeWidth="2" />
        <circle
          className={styles.circle}
          cx="10"
          cy="5"
          r="5"
          fill="transparent"
          style={{
            cursor: "ew-resize",
            pointerEvents: isInstance ? "auto" : "none",
          }}
          {...moveLeft}
        />
        <circle
          className={styles.circle}
          cx={`${len - 10}`}
          cy="5"
          r="5"
          fill="transparent"
          style={{
            cursor: "ew-resize",
            pointerEvents: isInstance ? "auto" : "none",
          }}
          {...moveRight}
        />
      </svg>
    </div>
  );
};

HorizonLine.metaName = "横向电路";
HorizonLine.id = 1;

export default HorizonLine;
