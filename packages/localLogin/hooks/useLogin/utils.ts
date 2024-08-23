/**  token 的 localstorage key */
export const LOCALSTORAGE_TOKEN = "accesstoken";
/** 用户信息 localstorage key */
export const LOCALSTORAGE_USERINFO = "userinfo";
/** 用户名称 localstorage key */
export const LOCALSTORAGE_USERNAME = "username";
/**
 * 存储用户信息到localStorage
 * @param loginInfo 用户登录信息
 * @param token accesstoken
 * @param userInfo 用户详细信息
 * @returns
 */
export function saveUserInfo({
  userName,
  token,
  userInfo,
}: {
  token?: string;
  userName?: string;
  userInfo?: string;
}): Promise<void> {
  return new Promise((reslove, reject) => {
    try {
      if (userName) localStorage.setItem(LOCALSTORAGE_USERNAME, userName);
      if (token) localStorage.setItem(LOCALSTORAGE_TOKEN, token);
      if (userInfo) localStorage.setItem(LOCALSTORAGE_USERINFO, userInfo);
      reslove();
    } catch (error) {
      reject();
    }
  });
}
/**
 * 清除localStorage中的用户信息
 */
export function clearUserInfo(): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      localStorage.removeItem(LOCALSTORAGE_USERINFO);
      localStorage.removeItem(LOCALSTORAGE_TOKEN);
      localStorage.removeItem(LOCALSTORAGE_USERNAME);
      resolve();
    } catch (error) {
      reject();
    }
  });
}
/**
 * 广播用户信息更新
 */
export function broadcastUserInfo() {
  window.dispatchEvent(
    new StorageEvent("storage", { key: LOCALSTORAGE_USERINFO })
  );
  window.dispatchEvent(
    new StorageEvent("storage", { key: LOCALSTORAGE_TOKEN })
  );
}
