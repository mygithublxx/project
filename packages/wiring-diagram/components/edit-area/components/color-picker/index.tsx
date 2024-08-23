import React from "react";
import styles from "./index.module.less";
import { Input } from "@gw/web-basic-components";
import ColorPicker from "rc-color-picker";

const MyColorPicker = ({
  onChange,
  displayColor,
}: {
  onChange: (color: string) => void;
  displayColor: string;
}) => {
  const calcAlpha = () => {
    if (displayColor?.slice(-2)) {
      return (parseInt(displayColor.slice(-2), 16) / 255) * 100;
    }
  };

  return (
    <>
      <div className={styles.colorPicker}>
        <ColorPicker
          color={displayColor}
          alpha={calcAlpha()}
          onChange={(value) => {
            const opacity = ((value.alpha / 100) * 255)
              .toString(16)
              .split(".")[0]
              .slice(0, 2);
            onChange(
              value.color + (opacity.length === 1 ? "0" + opacity : opacity) ||
                "ff"
            );
          }}
        >
          <Input value={displayColor} className="react-custom-trigger" />
        </ColorPicker>
      </div>
      <span
        className={styles.sampleColor}
        style={{
          backgroundColor: displayColor,
        }}
      ></span>
    </>
  );
};

export default MyColorPicker;
