import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  Row,
  Select,
  Space,
  Switch,
} from "@gw/web-basic-components";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./index.module.less";
import deleteIcon from "../../../../assets/operation-area/delete-icon.png";
import MyColorPicker from "../color-picker";
import { Cell } from "@antv/x6";
import AddButton from "../add-button";
import RangePicker from "@gw/web-basic-components/lib/date-picker/split-range-picker";
import useRequest from "../../../../utils/use-request-temp";
import api from "../../../../api";
import { itemsConditions } from "../../../../const/conditions";
import { IrregularItemContainer } from "../../../irregular-item-container";
import { IRREGULAR_ITEMS_MAP } from "../../../../utils/irregular-items";
import { IInfoEntry } from "../../../../dto";

const EventModal = ({
  modalVis,
  events,
  eventOperation,
  curNode,
  currentEvent,
  deviceSn,
  closeModal,
  onSaveEvent,
}: {
  modalVis: boolean;
  events: any[];
  eventOperation: "add" | "edit";
  curNode: Cell;
  currentEvent: number;
  deviceSn;
  closeModal: () => void;
  onSaveEvent;
}) => {
  const itemsOfFillColor = [
    "inverter",
    "battery",
    "breaker-open",
    "inverter-other",
    "photovoltaic",
    "charge-gun",
    "SP",
  ];
  const [itemForm] = Form.useForm();
  const conditionType = Form.useWatch("conditionType", itemForm);
  const conditionList = Form.useWatch("conditionList", itemForm);
  const textColor = Form.useWatch(["result", "textColor"], itemForm);
  const strokeColor = Form.useWatch(["result", "strokeColor"], itemForm);
  const fillColor = Form.useWatch(["result", "fillColor"], itemForm);
  const connectColor = Form.useWatch(["result", "connectColor"], itemForm);
  const enableFlow = Form.useWatch(["result", "enableFlow"], itemForm);
  const isReversed = Form.useWatch(["result", "isReversed"], itemForm);
  const irregularStatus = Form.useWatch(
    ["result", "irregularStatus"],
    itemForm
  );

  // 第一个条件判断的位置
  const [rationalOperationPos, setRationalOperationPos] = useState<number>(0);
  // 信息词条
  const [infoEntrys, setInfoEntrys] = useState<IInfoEntry[]>([]);

  // 获取信息词条
  const [{ loading }, fetchInfoEntry] = useRequest<any, any>(
    api.microGrid.infoEntry,
    {
      parallel: true,
    }
  );

  const needStrokeColor = () => {
    return !curNode?.isEdge() && curNode?.data?.key !== "placeholder";
  };

  const needTextColor = () => {
    if (curNode?.data?.key === "placeholder") {
      return true;
    }
    return false;
  };

  const needFillColor = () => {
    if (curNode?.isEdge()) return false;
    if (itemsOfFillColor.includes(curNode?.data?.key)) {
      return true;
    }

    return false;
  };

  const showResult = () => {
    if (conditionList?.length && conditionList[0].conditionType) {
      return true;
    }
    return false;
  };

  const onThingIdChange = (code, name) => {
    const list = itemForm.getFieldsValue()?.conditionList;
    for (let i = 0; i < list?.length; i++) {
      if (list[i]?.conditionType === "rationalOperation") {
        itemForm.setFieldValue(["conditionList", i, "thingId"], code);
        itemForm.setFieldValue(["conditionList", i, "thingName"], name);
        itemForm.setFieldValue(["conditionList", i, "infoEntry"], undefined);
        itemForm.setFieldValue(["conditionList", i, "judgeLogic"], undefined);
        itemForm.setFieldValue(
          ["conditionList", i, "attributeValue"],
          undefined
        );
      }
    }
  };

  const renderFormItems = useCallback(
    ({
      key,
      name,
      ...restField
    }: {
      key: number;
      name: number;
      fieldKey?: number;
    }) => {
      let type = "rationalOperation";
      if (conditionList && conditionList[name])
        type = conditionList[name]["conditionType"];

      if (type === "rationalOperation") {
        return (
          <>
            <Row>
              <Col span={11}>
                <Form.Item
                  {...restField}
                  label="物"
                  name={[name, "thingId"]}
                  rules={[{ required: true, message: "请选择物" }]}
                >
                  <Select
                    getPopupContainer={(triggerNode) => triggerNode.parentNode}
                    disabled={name !== rationalOperationPos}
                    showSearch
                    placeholder="请选择物"
                    onChange={(value) => {
                      setInfoEntrys([]);

                      itemForm.setFieldValue(
                        ["conditionList", name, "infoEntry"],
                        undefined
                      );

                      if (name === rationalOperationPos)
                        fetchInfoEntry({ thing_code: value }).then((res) => {
                          if (res?.dataList?.length)
                            setInfoEntrys([...res.dataList]);
                        });
                    }}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option.children as any)
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    onSelect={(value, option) => {
                      onThingIdChange(value, option["children"]);
                      // itemForm.setFieldValue(
                      //   ["conditionList", name, "thingName"],
                      //   option["children"]
                      // );
                      // itemForm.setFieldValue(
                      //   ["conditionList", name, "judgeLogic"],
                      //   undefined
                      // );
                      // itemForm.setFieldValue(
                      //   ["conditionList", name, "attributeValue"],
                      //   undefined
                      // );
                    }}
                  >
                    {deviceSn &&
                      deviceSn.map((device, index) => {
                        return (
                          <Select.Option
                            key={index}
                            value={device.code}
                            device-data={device}
                          >
                            {device.name}
                          </Select.Option>
                        );
                      })}
                  </Select>
                </Form.Item>
                <Form.Item
                  name={[name, "thingName"]}
                  style={{ display: "none" }}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={11} offset={2}>
                <Form.Item
                  {...restField}
                  initialValue={[]}
                  label="物对应的信息词条"
                  name={[name, "infoEntry"]}
                  rules={[
                    { required: true, message: "请选择物对应的信息词条" },
                  ]}
                >
                  <Select
                    getPopupContainer={(triggerNode) => triggerNode.parentNode}
                    showSearch
                    placeholder="请选择物对应的信息词条"
                    filterOption={(input, option) =>
                      (option.children as any)
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    onSelect={(value, option) => {
                      // 在选择信息词条时，将信息词条的额外信息带入
                      itemForm.setFieldValue(
                        ["conditionList", name, "measureTagCode"],
                        option["measure-tag-code"]
                      );
                      itemForm.setFieldValue(
                        ["conditionList", name, "unitCode"],
                        option["unit-code"]
                      );
                      itemForm.setFieldValue(
                        ["conditionList", name, "infoEntryName"],
                        option["children"]
                      );
                    }}
                  >
                    {infoEntrys &&
                      infoEntrys &&
                      infoEntrys.map((item) => {
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
                <Form.Item
                  name={[name, "infoEntryName"]}
                  style={{ display: "none" }}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={[name, "measureTagCode"]}
                  style={{ display: "none" }}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={[name, "unitCode"]}
                  style={{ display: "none" }}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <Form.Item
                  {...restField}
                  label="判断逻辑"
                  name={[name, "judgeLogic"]}
                  rules={[{ required: true, message: "请选择判断逻辑" }]}
                >
                  <Select
                    placeholder="请选择判断逻辑"
                    getPopupContainer={(triggerNode) => triggerNode.parentNode}
                  >
                    {itemsConditions &&
                      itemsConditions.map((item, index) => {
                        return (
                          <Select.Option key={index} value={item.id}>
                            {item.label}
                          </Select.Option>
                        );
                      })}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={11} offset={2}>
                <Form.Item
                  {...restField}
                  label="属性值"
                  name={[name, "attributeValue"]}
                  rules={[{ required: true, message: "请填写属性值" }]}
                >
                  <InputNumber placeholder="请填写属性值" />
                </Form.Item>
              </Col>
            </Row>
          </>
        );
      } else {
        return (
          <Row>
            <Col span={24}>
              <Form.Item
                {...restField}
                label="时间范围"
                name={[name, "timeRange"]}
                rules={[{ required: true, message: "请选择时间范围" }]}
              >
                <RangePicker
                  picker="time"
                  getPopupContainer={(triggerNode: any) =>
                    triggerNode?.parentNode
                  }
                />
              </Form.Item>
            </Col>
          </Row>
        );
      }
    },
    [conditionList, infoEntrys, conditionType]
  );

  useEffect(() => {
    if (conditionList?.length) {
      for (let i = 0; i < conditionList?.length; i++) {
        if (conditionList[i]?.conditionType === "rationalOperation") {
          setRationalOperationPos(i);
          break;
        }
      }
    }
  }, [conditionList]);

  const nodeType = curNode?.data?.key || "";
  const IrregularItems = IRREGULAR_ITEMS_MAP?.[nodeType.split("-")?.[0]];

  useEffect(() => {
    if (curNode) {
      const target = curNode.getData();
      if (eventOperation === "add") {
        itemForm.setFieldsValue({
          conditionList: [{ conditionType: undefined }],
          result: {
            textColor: "#191c26ff",
            strokeColor: "#525f7cff",
            fillColor: "#22ef6266",
            connectColor: "#525f7cff",
            irregularStatus: IrregularItems?.[0]?.key,
          },
        });
      }
      if (eventOperation === "edit" && currentEvent !== undefined) {
        let et;
        if (target)
          et = target?.extData?.events?.find((_, i) => i === currentEvent);
        if (et?.conditionList?.length && et.conditionList[0]?.thingId) {
          // eslint-disable-next-line camelcase
          fetchInfoEntry({ thing_code: et.conditionList[0].thingId }).then(
            (res) => {
              if (res?.dataList?.length) setInfoEntrys([...res.dataList]);
            }
          );
        }
        itemForm.setFieldsValue({
          ...et,
        });
      }
    }
  }, [curNode, eventOperation, currentEvent, modalVis]);

  useEffect(() => {
    if (modalVis === false) {
      // 关闭弹窗清空表单
      itemForm.resetFields();
      setInfoEntrys([]);
    }
  }, [modalVis]);

  return (
    <Modal
      loading={loading}
      open={modalVis}
      onCancel={() => {
        closeModal();
      }}
      destroyOnClose
      title={"事件" + ((events?.length || 0) + 1)}
      footer={
        <Space>
          <Button
            onClick={() => {
              closeModal();
            }}
            style={{ marginRight: "calc(1.25rem - 8px)" }}
          >
            取消
          </Button>
          <Button
            onClick={() => {
              itemForm
                .validateFields()
                .then(() => {
                  onSaveEvent(itemForm.getFieldsValue(), eventOperation);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
            type={"primary"}
          >
            确定
          </Button>
        </Space>
      }
    >
      <div className={styles.container}>
        <Form form={itemForm}>
          <Form.List name="conditionList">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }, index) => (
                  <div
                    key={key}
                    style={{
                      marginBottom:
                        index === fields?.length - 1 ? "1.88rem" : 0,
                    }}
                  >
                    <div
                      className={styles["conjuction"]}
                      style={{ display: index !== 0 ? "flex" : "none" }}
                    >
                      <Form.Item
                        noStyle
                        name={[name, "conjunction"]}
                        initialValue={0}
                      >
                        <Radio.Group>
                          <Radio value={0}>或</Radio>
                          <Radio value={1}>且</Radio>
                        </Radio.Group>
                      </Form.Item>
                    </div>
                    <div className={styles["condition-item"]}>
                      <div className={styles["condition-banner"]}>
                        <span>条件{index + 1}</span>
                      </div>
                      <div
                        className={styles["delete"]}
                        style={{ display: index === 0 ? "none" : "block" }}
                        onClick={() => remove(name)}
                      >
                        <img src={deleteIcon} />
                      </div>
                      <Row>
                        <Col span={11}>
                          <Form.Item
                            {...restField}
                            label="条件类型"
                            name={[name, "conditionType"]}
                            // initialValue={"rationalOperation"}
                            rules={[
                              { required: true, message: "请选择条件类型" },
                            ]}
                          >
                            <Select
                              getPopupContainer={(triggerNode) =>
                                triggerNode.parentNode
                              }
                              placeholder="请选择条件类型"
                              onSelect={(value) => {
                                if (value === "timeRange") {
                                  itemForm.setFieldValue(
                                    ["conditionList", name, "timezone"],
                                    8
                                  );
                                }
                              }}
                            >
                              <Select.Option value="rationalOperation">
                                关系运算
                              </Select.Option>
                              <Select.Option value="timeRange">
                                时间范围
                              </Select.Option>
                            </Select>
                          </Form.Item>
                        </Col>
                      </Row>
                      {itemForm.getFieldValue([
                        "conditionList",
                        name,
                        "conditionType",
                      ])
                        ? renderFormItems({ key, name, ...restField })
                        : null}
                    </div>
                  </div>
                ))}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "1.88rem",
                  }}
                >
                  <AddButton
                    text="添加条件"
                    onClick={() =>
                      add({
                        thingId: itemForm.getFieldValue([
                          "conditionList",
                          rationalOperationPos,
                          "thingId",
                        ]),
                        thingName: itemForm.getFieldValue([
                          "conditionList",
                          rationalOperationPos,
                          "thingName",
                        ]),
                      })
                    }
                  />
                </div>
              </>
            )}
          </Form.List>

          {showResult() ? (
            <div className={styles["result"]}>
              <div className={styles["result-banner"]}>
                <span>结果</span>
              </div>
              {IrregularItems && IrregularItems.length > 0 && (
                <div className={styles["result-irregular-items"]}>
                  {IrregularItems.map((item) => {
                    return (
                      <Form.Item name={["result", "irregularStatus"]}>
                        <IrregularItemContainer
                          active={irregularStatus === item.key}
                          key={item.key}
                          svg={item.svg}
                          onChange={() => {
                            itemForm.setFieldValue(
                              ["result", "irregularStatus"],
                              item.key
                            );
                          }}
                        />
                      </Form.Item>
                    );
                  })}
                </div>
              )}
              <div className={styles["result-form"]}>
                {needStrokeColor() ? (
                  <Form.Item
                    label="边框颜色"
                    name={["result", "strokeColor"]}
                    initialValue={"#525f7cff"}
                  >
                    <MyColorPicker
                      onChange={() => {}}
                      displayColor={strokeColor}
                    />
                  </Form.Item>
                ) : null}
                {needFillColor() ? (
                  <Form.Item
                    label="填充颜色"
                    name={["result", "fillColor"]}
                    initialValue={"#22ef6266"}
                  >
                    <MyColorPicker
                      onChange={() => {}}
                      displayColor={fillColor}
                    />
                  </Form.Item>
                ) : null}
                {needTextColor() ? (
                  <Form.Item
                    label="文字颜色"
                    name={["result", "textColor"]}
                    initialValue={"#191c26ff"}
                  >
                    <MyColorPicker
                      onChange={() => {}}
                      displayColor={textColor}
                    />
                  </Form.Item>
                ) : null}
                {curNode?.data?.key === "parking" ? (
                  <Form.Item
                    label="车位样式"
                    name={["result", "isEmpty"]}
                    initialValue={0}
                  >
                    <Select
                      getPopupContainer={(triggerNode) =>
                        triggerNode.parentNode
                      }
                    >
                      <Select.Option value={0}>无车</Select.Option>
                      <Select.Option value={1}>有车</Select.Option>
                    </Select>
                  </Form.Item>
                ) : null}
                {curNode?.isEdge() ? (
                  <Form.Item
                    label="连线颜色"
                    name={["result", "connectColor"]}
                    initialValue={"#525f7cff"}
                  >
                    <MyColorPicker
                      onChange={() => {}}
                      displayColor={connectColor}
                    />
                  </Form.Item>
                ) : null}
              </div>
              <div className={styles["edge-wrapper"]}>
                {curNode?.isEdge() ? (
                  <>
                    <div className={styles["switch-layout"]}>
                      <span>潮流</span>
                      <Form.Item
                        label="潮流"
                        name={["result", "enableFlow"]}
                        noStyle
                      >
                        <Switch
                          checked={enableFlow}
                          onChange={() => {
                            itemForm.setFieldValue(
                              ["result", "isReversed"],
                              false
                            );
                          }}
                        />
                      </Form.Item>
                    </div>

                    {enableFlow ? (
                      <div className={styles["switch-layout"]}>
                        <span>反向流动</span>
                        <Form.Item
                          label="反向流动"
                          name={["result", "isReversed"]}
                          noStyle
                        >
                          <Switch checked={isReversed} />
                        </Form.Item>
                      </div>
                    ) : null}
                  </>
                ) : null}
              </div>
            </div>
          ) : null}
        </Form>
      </div>
    </Modal>
  );
};

export default EventModal;
