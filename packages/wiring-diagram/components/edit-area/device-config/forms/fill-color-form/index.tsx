import { Form, Select } from "@gw/web-basic-components";
import React, { useEffect } from "react";
import MyColorPicker from "../../../components/color-picker";
import { Cell, Node } from "@antv/x6";
import { parkingConstructure, vehicleConstructure } from "../../../../../const";
import { setSocText } from "../../../../../utils/node-utils";
import { IDeviceInfo } from "../../../../../dto";

export const itemsOfFillColor = [
  "inverter",
  "battery",
  "breaker-open",
  "inverter-other",
  "photovoltaic",
  "charge-gun",
  "SP",
];

const FillColorForm = ({
  curNode,
  deviceSn,
  onDetailChange,
  drawInverterDetails,
}: {
  curNode: Cell;
  deviceSn: IDeviceInfo[];
  onDetailChange;
  drawInverterDetails;
}) => {
  const itemsOfItemName = ["inverter", "inverter-other", "battery", "parking"];
  const [itemForm] = Form.useForm();
  const strokeColor = Form.useWatch("strokeColor", itemForm);
  const fillColor = Form.useWatch("fillColor", itemForm);
  const isEmpty = Form.useWatch("isEmpty", itemForm);

  const needFillColor = () => {
    if (itemsOfFillColor.includes(curNode?.data?.key)) return true;
    return false;
  };

  const needItemName = () => {
    if (itemsOfItemName.includes(curNode?.data?.key)) return true;
    return false;
  };

  const updateDetail = () => {
    onDetailChange("appearance", itemForm.getFieldsValue(true));
  };

  useEffect(() => {
    if (curNode) {
      const nodeDetail = curNode.getData();
      const appearance = nodeDetail?.extData?.appearance;
      if (appearance) {
        if (appearance?.strokeColor) {
          itemForm.setFieldValue("strokeColor", appearance.strokeColor);
        }
        if (appearance?.fillColor) {
          itemForm.setFieldValue("fillColor", appearance.fillColor);
        }
        if (appearance?.isEmpty !== undefined) {
          itemForm.setFieldValue("isEmpty", appearance.isEmpty);
        }
        if (appearance?.itemId !== undefined) {
          itemForm.setFieldValue("itemId", appearance.itemId);
        }
      } else {
        updateDetail();
      }
    }
  }, [curNode]);

  useEffect(() => {
    // 有车、无车的处理
    if (isEmpty === 0) {
      curNode.setAttrs({ ...parkingConstructure().attrs });
      curNode.setMarkup(parkingConstructure().markup);
      (curNode as Node).setSize({ width: 40, height: 40 });
      curNode.setData({ isEmpty: 0 });
      setSocText(curNode, "p");
    }
    if (isEmpty === 1) {
      curNode.setAttrs({ ...vehicleConstructure().attrs });
      curNode.setMarkup(vehicleConstructure().markup);
      (curNode as Node).setSize({ width: 40, height: 40 });
      curNode.setData({ isEmpty: 1 });
      setSocText(curNode, "--");
    }
  }, [isEmpty]);

  return (
    <Form form={itemForm}>
      <Form.Item
        label="边框颜色"
        name={"strokeColor"}
        initialValue={"#525f7cff"}
      >
        <MyColorPicker
          onChange={() => updateDetail()}
          displayColor={strokeColor}
        />
      </Form.Item>
      {needFillColor() ? (
        <Form.Item
          label="填充颜色"
          name={"fillColor"}
          initialValue={"#22ef6266"}
        >
          <MyColorPicker
            onChange={() => updateDetail()}
            displayColor={fillColor}
          />
        </Form.Item>
      ) : null}
      {curNode?.data?.key === "parking" ? (
        <Form.Item label="车位样式" name={"isEmpty"} initialValue={0}>
          <Select onSelect={() => updateDetail()}>
            <Select.Option value={0}>无车</Select.Option>
            <Select.Option value={1}>有车</Select.Option>
          </Select>
        </Form.Item>
      ) : null}
      {needItemName() ? (
        <Form.Item label="元件名称" name={"itemId"}>
          <Select
            showSearch
            placeholder="请选择元件名称"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option.children as any)
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
            onSelect={(_, option) => {
              // 对逆变器元件进行特殊处理
              if (
                curNode?.data?.key === "inverter" ||
                curNode?.data?.key === "inverter-other"
              ) {
                itemForm.setFieldValue(["deviceData"], option["device-data"]);
                drawInverterDetails(itemForm.getFieldsValue(true));
              }
              // 对电池簇，车位组件进行处理
              updateDetail();
            }}
          >
            {deviceSn?.map((device) => {
              return (
                <Select.Option
                  key={device.code}
                  value={device.code}
                  device-data={device}
                >
                  {device.name}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
      ) : null}
    </Form>
  );
};

export default FillColorForm;
