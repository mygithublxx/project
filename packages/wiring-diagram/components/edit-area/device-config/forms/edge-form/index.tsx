import { Form, Select } from "@gw/web-basic-components";
import React, { useEffect } from "react";
import MyColorPicker from "../../../components/color-picker";

const EdgeForm = ({
  curNode,
  onDetailChange,
}: {
  curNode;
  onDetailChange: (type: string, detail: any) => void;
}) => {
  const STROKE_WIDTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [itemForm] = Form.useForm();
  const connectColor = Form.useWatch("connectColor", itemForm);

  const updateDetail = () => {
    onDetailChange("appearance", itemForm.getFieldsValue(true));
  };

  useEffect(() => {
    if (curNode) {
      const nodeDetail = curNode.getData();
      const appearance = nodeDetail?.extData?.appearance;
      if (appearance) {
        if (appearance?.connectColor) {
          itemForm.setFieldValue("connectColor", appearance?.connectColor);
        }
        if (appearance?.strokeStyle) {
          itemForm.setFieldValue("strokeStyle", appearance?.strokeStyle);
        }
        if (appearance?.strokeWidth) {
          itemForm.setFieldValue("strokeWidth", appearance?.strokeWidth);
        }
      }
    }
  }, [curNode]);

  return (
    <Form form={itemForm}>
      <Form.Item
        label="连线颜色"
        name={"connectColor"}
        initialValue={"#525f7cff"}
      >
        <MyColorPicker
          onChange={() => updateDetail()}
          displayColor={connectColor}
        />
      </Form.Item>
      <Form.Item label="连线样式" name={"strokeStyle"} initialValue={"solid"}>
        <Select onSelect={updateDetail}>
          <Select.Option value="solid">
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "0.06rem",
                  background: "#000",
                }}
              />
            </div>
          </Select.Option>
          <Select.Option value="dashed">
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "0.06rem",
                  borderTop: "0.06rem dashed #000",
                }}
              />
            </div>
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="连线粗细" name={"strokeWidth"} initialValue={2}>
        <Select onSelect={updateDetail}>
          {STROKE_WIDTHS.map((width) => {
            return (
              <Select.Option key={width} value={width}>
                {width}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default EdgeForm;
