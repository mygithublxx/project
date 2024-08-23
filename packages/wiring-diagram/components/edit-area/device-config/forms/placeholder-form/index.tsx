import { Form, Input, Select, Spin } from "@gw/web-basic-components";
import React, { useEffect, useState } from "react";
import MyColorPicker from "../../../components/color-picker";
import useRequest from "../../../../../utils/use-request-temp";
import { IDeviceInfo, IInfoEntry } from "../../../../../dto";
import api from "../../../../../api";
import { fontSizeList } from "../../../../../const";

const PlaceholderForm = ({
  deviceSn,
  onDetailChange,
  curNode,
}: {
  deviceSn: IDeviceInfo[];
  onDetailChange;
  curNode;
}) => {
  const [itemForm] = Form.useForm();

  const textColor = Form.useWatch("textColor", itemForm);
  // 信息词条
  const [infoEntrys, setInfoEntrys] = useState<IInfoEntry[]>();

  // 获取信息词条
  const [{ loading }, fetchInfoEntry] = useRequest<any, any>(
    api.microGrid.infoEntry,
    {
      parallel: false,
    }
  );

  const updateDetail = () => {
    onDetailChange("appearance", itemForm.getFieldsValue(true));
  };

  useEffect(() => {
    if (curNode) {
      const nodeDetail = curNode.getData();
      const appearance = nodeDetail?.extData?.appearance;
      if (appearance) {
        if (appearance?.textColor) {
          itemForm.setFieldValue("textColor", appearance.textColor);
        }
        if (
          appearance?.itemId &&
          appearance?.itemId !== itemForm.getFieldsValue()?.itemId
        ) {
          fetchInfoEntry({
            // eslint-disable-next-line camelcase
            thing_code: appearance?.itemId,
          }).then((res) => {
            setInfoEntrys(res?.dataList);
          });
        } // 如果存在进行展示
        itemForm.setFieldsValue(appearance);
      } else {
        updateDetail();
      }
    }
  }, [curNode]);

  return (
    <Spin spinning={loading}>
      <Form form={itemForm}>
        <Form.Item
          label="文字颜色"
          name={"textColor"}
          initialValue={"#191c26ff"}
        >
          <MyColorPicker
            onChange={() => updateDetail()}
            displayColor={textColor}
          />
        </Form.Item>
        <Form.Item label="字号" name={"textSize"} initialValue={14}>
          <Select onChange={updateDetail}>
            {fontSizeList?.map((size) => {
              return (
                <Select.Option key={size} value={size}>
                  {size}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item label="元件名称" name={"itemId"}>
          <Select
            showSearch
            placeholder="请选择元件名称"
            onChange={(value) => {
              setInfoEntrys([]);
              itemForm.setFieldValue(["infoEntry"], undefined);
              // eslint-disable-next-line camelcase
              fetchInfoEntry({ thing_code: value }).then((res) => {
                setInfoEntrys(res?.dataList);
              });
              updateDetail();
            }}
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option.children as any)
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
            onSelect={(value, option) => {
              itemForm.setFieldValue(["deviceData"], option["device-data"]);
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
        <Form.Item label="显示名称" name={"displayName"}>
          <Input onChange={updateDetail} />
        </Form.Item>
        <Form.Item label="信息词条" name={"infoEntry"}>
          <Select
            showSearch
            filterOption={(input, option) =>
              (option.children as any)
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
            onSelect={(value, option) => {
              itemForm.setFieldValue(
                ["measureTagCode"],
                option["measure-tag-code"]
              );
              itemForm.setFieldValue(["unitCode"], option["unit-code"]);
              updateDetail();
            }}
          >
            {(infoEntrys || []).map((item) => {
              return (
                <Select.Option
                  key={item.id}
                  value={item.id}
                  measure-tag-code={item.measureTagCode}
                  unit-code={item.unitCode}
                >
                  {item.name}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default PlaceholderForm;
