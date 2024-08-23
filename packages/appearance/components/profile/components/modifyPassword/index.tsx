import React, { useMemo, useState } from "react";
import {
  Button,
  Confirm,
  Form,
  Input,
  message,
  useFragmentManager,
} from "@gw/web-basic-components";
import { useRequest, apis } from "../../../../../appearance/utils";
import { useTranslation } from "react-i18next";
import PswInput from "../input-psw";
import type { ModifyPasswordProps } from "./dto";

import WarningSvg from "../../../../assets/confirm_warning.svg";

/**
 * 修改密码
 */
const ModifyPassword = (props: ModifyPasswordProps) => {
  const { isI18N } = props;
  const { t } = useTranslation();
  const [confirmVisible, setConfirmVisible] = useState(false);
  /**
   * 修改头像接口
   */
  const [{ loading }, fetchPassword] = useRequest(apis.account.reset);
  /**
   * 表单实体
   */
  const [form] = Form.useForm();

  const { back } = useFragmentManager();
  const labelIcon = useMemo(() => {
    return (
      <div
        style={{
          width: "0.5rem",
          height: "0.5rem",
          background:
            props.appCode === "We-Power-New"
              ? "rgba(71,83,99,0.2) linear-gradient(135deg, #19FFA7 0%, #2CFFDD 100%)"
              : "#3B65EE",
          borderRadius: "2px",
          boxShadow: "0px 4px 10px 0px rgba(0,0,0,0.2)",
        }}
      />
    );
  }, []);
  /**
   * 验证新密码
   */
  const validateConfirmPassword = ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue("new") === value) {
        return Promise.resolve();
      }
      return Promise.reject(
        new Error(
          isI18N ? t("new_password_inconsistent_tips") : "新密码两次输入不一致"
        )
      );
    },
  });

  /***
   * 密码校验格式
   */
  const validatorPattern = (_, value) => {
    const pswPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    const limitChinese = /^[a-zA-Z0-9`~!@#$%^&*()_+{}[\]|'";:?<>,./\\=-]+$/;
    if (!pswPattern.test(value) && !limitChinese.test(value)) {
      return Promise.reject(
        new Error(
          isI18N
            ? t("password_validate_msg") +
              " " +
              t("enter_chinese_characters_tip")
            : "密码必须8-16位,包含大小写字母和数字,不能输入中文和中文字符"
        )
      );
    } else if (!pswPattern.test(value)) {
      return Promise.reject(
        new Error(
          isI18N
            ? t("password_validate_msg")
            : "密码必须8-16位,包含大小写字母和数字"
        )
      );
    } else if (!limitChinese.test(value)) {
      return Promise.reject(
        new Error(
          isI18N ? t("enter_chinese_characters_tip") : "不能输入中文和中文字符"
        )
      );
    }
    return Promise.resolve();
  };
  /**
   * 表单验证
   */
  const formValidate = () => {
    form.submit();
  };
  /**
   * 提交事件
   */
  const submit = () => {
    const originalPsd = form.getFieldValue("origin");
    const newPsd = form.getFieldValue("new");
    fetchPassword({
      currPassword: originalPsd,
      newPassword: newPsd,
      username: props.fragmentData,
    })
      .then(() => {
        message.success(isI18N ? t("successfully_modified") : "修改成功");
        back();
      })
      .catch((error) => {
        console.log({ error });
      });
  };
  return (
    <>
      <div className="wbuc-modify-password">
        <span className="wbuc-tips">
          {isI18N
            ? t("password_validate_msg")
            : "密码必须8-16位，包含大小写字母和数字"}
        </span>
        <Form
          className="wbuc-form"
          form={form}
          onFinish={() => {
            setConfirmVisible(true);
          }}
          labelDecorationIcon={labelIcon}
        >
          <Form.Item
            label={isI18N ? t("original_password") : "原始密码"}
            name="origin"
            rules={[
              {
                required: true,
                message: isI18N
                  ? t("please_enter_original_password")
                  : "请输入原始密码",
              },
            ]}
          >
            <Input.Password
              placeholder={
                isI18N ? t("please_enter_original_password") : "请输入原始密码"
              }
            />
          </Form.Item>
          <Form.Item
            label={isI18N ? t("new_password") : "新密码"}
            name="new"
            validateFirst={true}
            rules={[
              {
                required: true,
                message: isI18N
                  ? t("please_enter_new_password")
                  : "请输入新密码",
              },
              {
                validator: validatorPattern,
              },
            ]}
          >
            <PswInput
              placeholder={
                isI18N ? t("please_enter_new_password") : "请输入新密码"
              }
              minLength={8}
              maxLength={16}
            />
          </Form.Item>
          <Form.Item
            label={isI18N ? t("confirm_new_password") : "确认新密码"}
            name="confirmNew"
            validateFirst={true}
            rules={[
              {
                required: true,
                message: isI18N
                  ? t("please_enter_new_password")
                  : "请输入新密码",
              },
              {
                validator: validatorPattern,
              },
              validateConfirmPassword,
            ]}
          >
            <PswInput
              minLength={8}
              maxLength={16}
              placeholder={
                isI18N ? t("please_confirm_new_password") : "请确认新密码"
              }
            />
          </Form.Item>
          <Form.Item name="button"></Form.Item>
        </Form>
        <div className="wbuc-btn-wrapper">
          <Button onClick={back}>{isI18N ? t("cancel") : "取消"}</Button>
          <Button type="primary" onClick={formValidate} loading={loading}>
            {isI18N ? t("besure") : "确认"}
          </Button>
        </div>
      </div>
      <Confirm
        visible={confirmVisible}
        icon={WarningSvg}
        title={`${isI18N ? t("modify_confirm_msg") : "是否确定修改"}？`}
        onClose={() => {
          setConfirmVisible(false);
        }}
        okText={isI18N ? t("besure") : "确认"}
        cancelText={isI18N ? t("cancel") : "取消"}
        onOk={submit}
      />
    </>
  );
};

export default ModifyPassword;
