import { Button, Form, Input } from "@gw/web-basic-components";
import React, { useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
import { useLogin } from "./hooks";
import { LOCALSTORAGE_USERNAME } from "./hooks/useLogin/utils";
import type { LocalLoginProps } from "./dto";
import "./index.less";

/**
 * 本地登录功能组件
 */
const LocalLogin = (props: LocalLoginProps) => {
  const history = useHistory();

  /** 登录成功回调 */
  const onSuccess = () => {
    history.push("/");
  };

  const [{ loading }, login] = useLogin(props.onSuccess ?? onSuccess);

  const INIT_VALUE = useMemo(() => {
    return {
      account: localStorage.getItem(LOCALSTORAGE_USERNAME),
      rememberMe: true,
    };
  }, []);

  useEffect(() => {
    if (
      process.env.NODE_ENV === "production" &&
      (typeof _doc_ === "undefined" || _doc_ !== true)
    ) {
      history.push("/");
    }
  }, []);

  if (
    (typeof _doc_ !== "undefined" && _doc_ === true) ||
    process.env.NODE_ENV === "development"
  ) {
    return (
      <div
        className={classNames("wbuc-local-login", {
          ["wbuc-local-login-page"]: !!props.history,
        })}
      >
        <div className="wbuc-local-login-content">
          <div className="wbuc-local-login-content-wrapper">
            <h2 className="wbuc-local-login-title">登录</h2>
            <Form
              name="login"
              onFinish={login}
              className="wbuc-local-login-form"
              initialValues={INIT_VALUE}
            >
              <Form.Item
                name="account"
                rules={[{ required: true, message: "请输入用户名" }]}
              >
                <Input placeholder="请输入用户名" allowClear maxLength={30} />
              </Form.Item>
              <Form.Item
                name="pwd"
                rules={[
                  { required: true, message: "请输入密码" },
                  { type: "string", min: 8, message: "长度应大于等于8位" },
                ]}
              >
                <Input.Password
                  placeholder="请输入密码"
                  maxLength={16}
                  minLength={8}
                  allowClear
                />
              </Form.Item>
              <Form.Item name="rememberMe" noStyle>
                {/* <Input style={{ height: 0, visibility: "hidden" }} /> */}
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  block
                  size="large"
                  htmlType="submit"
                  loading={loading}
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }

  return <div></div>;
};

export default LocalLogin;

LocalLogin.useLogin = useLogin;
