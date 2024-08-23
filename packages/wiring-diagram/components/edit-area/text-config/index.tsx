import React, { useEffect } from "react";
import styles from "./index.module.less";
import { Form, Select } from "@gw/web-basic-components";
import MyColorPicker from "../components/color-picker";
import { Cell } from "@antv/x6";
import { fontSizeList } from "../../../const";

const TextConfig = ({ curNode }: { curNode: Cell }) => {
  const [itemForm] = Form.useForm();
  const textColor = Form.useWatch("textColor", itemForm);

  useEffect(() => {
    if (curNode) {
      const color = curNode.getAttrByPath("label/style/color");
      const size = curNode.getAttrByPath("label/style/fontSize");
      if (color) {
        itemForm.setFieldValue("textColor", color);
      }
      if (size) {
        itemForm.setFieldValue("fontSize", size);
      }
    }
  }, [curNode]);

  return (
    <div className={styles.container}>
      <Form form={itemForm}>
        <Form.Item
          label="文字颜色"
          name={"textColor"}
          initialValue={"#191c26ff"}
        >
          <MyColorPicker
            onChange={(color) => {
              if (curNode) {
                curNode.setAttrByPath("label/style/color", color);
              }
            }}
            displayColor={textColor}
          />
        </Form.Item>
        <Form.Item label="字号" name={"fontSize"} initialValue={14}>
          <Select
            onSelect={(value) => {
              if (curNode) {
                curNode.setAttrByPath("label/style/fontSize", value);
              }
            }}
          >
            {fontSizeList?.map((size, index) => {
              return (
                <Select.Option key={index} value={size}>
                  {size}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TextConfig;
