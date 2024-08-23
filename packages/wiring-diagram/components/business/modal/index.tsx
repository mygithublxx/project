import React from "react";
import { Modal, ModalProps } from "@gw/web-basic-components";
import s from "./index.module.less";

const InnerModal = (props: ModalProps) => {
  return (
    <Modal destroyOnClose {...props}>
      <div className={s.modal}>{props.children}</div>
    </Modal>
  );
};

InnerModal.info = Modal.info;
InnerModal.success = Modal.success;
InnerModal.error = Modal.error;
InnerModal.warn = Modal.warn;
InnerModal.warning = Modal.warning;
InnerModal.confirm = Modal.confirm;

InnerModal.useModal = Modal.useModal;
InnerModal.destroyAll = Modal.destroyAll;
InnerModal.config = Modal.config;

export default InnerModal;
