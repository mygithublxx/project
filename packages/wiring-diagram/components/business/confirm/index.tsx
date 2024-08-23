import React from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import Modal from "../modal";
import { ModalFuncProps } from "@gw/web-basic-components";

function Confirm(props: ModalFuncProps) {
  return Modal.confirm({
    title: "提示",
    icon: <ExclamationCircleOutlined style={{ color: "#2161C2" }} />,
    okText: "确定",
    cancelText: "取消",
    ...props,
  });
}

export default Confirm;
