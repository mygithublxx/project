import api from "../../../utils/apis";
import useRequest from "../../../utils/use-request";
import type { HookRes, LoginReq, LoginRes, UserInfo } from "./dto";
import { broadcastUserInfo, saveUserInfo } from "./utils";

/**
 * 表单账号密码登录
 */
const useLogin = (
  cb?: (token: string, userInfo: UserInfo) => void
): HookRes => {
  /** 接口-用户账号密码登录 */
  const [{ loading }, fetchLogin] = useRequest<LoginReq, LoginRes>(
    api.user.login
  );
  /** 接口-获取加密的puserid */
  const [, fetchPuserid] = useRequest<void, string>(api.account.puserid);

  /**
   * 登录方法
   */
  const login = async (p: LoginReq) => {
    const res = await fetchLogin(p);
    const { token, userInfo } = res || {};

    await saveUserInfo({
      token,
      userInfo: JSON.stringify(userInfo),
      userName: userInfo.username,
    });
    broadcastUserInfo();
    try {
      const puserid = await fetchPuserid();
      if (puserid) {
        localStorage.setItem("puserid", puserid);
      } else {
        localStorage.removeItem("puserid");
      }
    } catch (error) {
      localStorage.removeItem("puserid");
      console.log(error);
    }
    cb?.(token, userInfo);
  };

  return [{ loading }, login];
};

export default useLogin;
