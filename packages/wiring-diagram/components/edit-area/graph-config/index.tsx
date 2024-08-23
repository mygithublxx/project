import React from "react";
import styles from "./index.module.less";
import { Form, Switch } from "@gw/web-basic-components";
import MyColorPicker from "../components/color-picker";
// import { updateSavingState } from "@/models/actions/wiring";
// import { useDispatch } from "react-redux";

const GraphConfig = ({ graphOptions, setGraphOptions }) => {
  const [itemForm] = Form.useForm();
  // const dispatch = useDispatch();
  const changeDisplayColor = (key: string, color: string) => {
    setGraphOptions((data) => {
      // dispatch(updateSavingState(true));
      if (key === "bgColor") {
        return {
          ...data,
          bgColor: color,
          initBgColor: color,
        };
      }
      if (key === "gridColor") {
        return {
          ...data,
          gridColor: color,
          initGridColor: color,
        };
      }
    });
  };

  return (
    <div className={styles.container}>
      <Form form={itemForm}>
        <Form.Item label="画布颜色" name={"graphColor"}>
          <MyColorPicker
            onChange={(color) => changeDisplayColor("bgColor", color)}
            displayColor={graphOptions.bgColor}
          />
        </Form.Item>
        <Form.Item noStyle>
          <div className={styles.showGrid}>
            <span>背景网格</span>
            <Switch
              checked={graphOptions?.showGrid || false}
              onChange={(value) =>
                setGraphOptions((data) => {
                  // dispatch(updateSavingState(true));
                  if (value) {
                    return { ...data, showGrid: true };
                  }
                  return { ...data, showGrid: false };
                })
              }
            />
          </div>
        </Form.Item>
        {graphOptions?.showGrid ? (
          <Form.Item label="网格颜色" name={"gridColor"}>
            <MyColorPicker
              onChange={(color) => changeDisplayColor("gridColor", color)}
              displayColor={graphOptions.gridColor}
            />
          </Form.Item>
        ) : null}
      </Form>
    </div>
  );
};

export default GraphConfig;
