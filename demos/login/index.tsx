import useRequest from "../../packages/utils/use-request";
import React, { FormEvent, MouseEventHandler, useState } from "react";
import apis from "../../packages/utils/apis";

/**
 * 登录授权
 */
interface Auth {
  /**
   * 是否是通过切换用户操作登录的
   */
  switch2Login: boolean;
  /**
   * 用户所属租户的身份信息
   */
  tenantIdentityList: any[];
  /**
   * token
   */
  token: string;
  /**
   * token失效时间（秒）
   */
  tokenValidityInSeconds: number;
  /**
   * 用户基本信息
   */
  userInfo: Record<string, any>;
}

const Login = () => {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [token, setToken] = useState("");
  const [, fetchLogin] = useRequest<any, Auth>(apis.user.login);
  const [, fetchLogout] = useRequest(apis.user.logout);

  const [, fetchPuserid] = useRequest<void, string>(apis.account.puserid);

  function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (e.currentTarget) {
      fetchLogin({
        account: e.currentTarget.username.value,
        pwd: e.currentTarget.pwd.value,
        rememberMe: true,
      })
        .then((res) => {
          console.log(res);

          localStorage.setItem("accesstoken", res.token);
          localStorage.setItem("userinfo", JSON.stringify(res.userInfo));
          setToken(res.token);
          fetchPuserid().then((res) => {
            localStorage.setItem("puserid", res);
          });
        })
        .catch((e) => {
          alert(e.message);
        });
    }
  }

  function logout(e: any) {
    e.preventDefault();
    e.stopPropagation();
    fetchLogout()
      .then(() => {
        setToken("");
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <>
      <form onSubmit={login}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            id="username"
            type="text"
            value={username}
            onInput={(e) => setUsername(e.currentTarget.value)}
          />
        </div>
        <div>
          <label htmlFor="pwd">Password</label>
          <input
            name="pwd"
            id="pwd"
            type="password"
            value={pwd}
            onInput={(e) => setPwd(e.currentTarget.value)}
          />
        </div>
        <button type="submit">登录</button>
        <button onClick={logout}>退出登录</button>
      </form>
      <div>
        <code>{token}</code>
      </div>
    </>
  );
};

export default Login;
