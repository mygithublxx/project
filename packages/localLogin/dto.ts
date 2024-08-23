import type { UserInfo } from "./hooks/useLogin/dto";
/**
 * 本地登录组件回调
 */
export interface LocalLoginProps {
  /**
   * 登录成功回调
   */
  onSuccess?: (token: string, userInfo: UserInfo) => void;
  /**
   * 支持扩展任意参数
   */
  [p: string]: any;
}
