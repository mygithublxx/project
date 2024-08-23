/**
 * hook 返回体
 */
export type HookRes = [
  { loading: boolean },
  (p: LoginReq | SmsLoginReq) => Promise<void>
];
/**
 * 账号密码登录授权-请求体
 */
export interface LoginReq {
  /**
   * 账号,长度1~30,示例值(Kratos)
   */
  account: string;
  /**
   * 密码，长度8~16,示例值(Kratos123456)
   */
  pwd: string;
  /**
   * 记住我（保留字段，暂不生效）
   */
  rememberMe?: boolean;
}
/**
 * 短信验证码登录-请求体
 */
export interface SmsLoginReq {
  /**
   * 验证码
   */
  code: string;
  /**
   * 手机号码
   */
  phone: string;
}
/**
 * 登录日志记录-请求体
 */
export interface LoginLogReq {
  /**
   * 账号,长度1~30,示例值(Kratos)
   */
  account: string;
  /**
   * 验证码
   */
  code?: string;
  /**
   * 手机号
   */
  phone?: string;
  /**
   * 密码，长度8~16,示例值(Kratos123456)
   */
  pwd: string;
  /**
   * 记住我（保留字段，暂不生效）
   */
  rememberMe?: boolean;
}

/**
 * 用户所属租户的身份信息
 */
export interface TenantIdentityList {
  /**
   * 租户身份code(业主：owner EPC: partner 固德威：platformManager)
   */
  code: string;
  /**
   * 租户身份id
   */
  id: string;
  /**
   * 租户身份名称
   */
  name: string;
}
/**
 * 角色的权限信息
 */
export interface RolePermissionInfos {
  /**
   * 选中的权限信息ID
   */
  permissionIds: string[];
  /**
   * 租户身份ID
   */
  tenantIdentityId: number;
}
/**
 * 角色信息
 */
export interface RoleInfos {
  /**
   *
   */
  adminFlag: boolean;
  /**
   * 角色编码
   */
  code: string;
  /**
   * 是否启用
   */
  enable: boolean;
  /**
   * 主键（雪花算法）
   */
  id: string;
  /**
   * 角色名称
   */
  name: string;
  /**
   * 角色的权限信息
   */
  rolePermissionInfos: RolePermissionInfos[];
  /**
   * 租户id
   */
  tenantId: number;
}
/**
 * 用户基本信息
 */
export interface UserInfo {
  /**
   * 默认头像图片的 code
   */
  avatarCode: string;
  /**
   * 头像图片的 OSS key
   */
  avatarFileKey: string;
  /**
   * 头像图片的链接
   */
  avatarFileUrl: string;
  /**
   * 组织架构ID
   */
  deptIdList: string[];
  /**
   * 是否启用
   */
  enable: boolean;
  /**
   * 主键（自增ID）
   */
  id: string;
  /**
   * 邮箱地址
   */
  mail: string;
  /**
   * 真实姓名
   */
  name: string;
  /**
   * 手机号
   */
  phone: string;
  /**
   * 密码重置时间
   */
  pwdResetTime: string;
  /**
   * 密码发送方式,多个以逗号分割(sms-短信，mail-邮件)
   */
  pwdSendType: string;
  /**
   * 角色信息
   */
  roleInfos: RoleInfos[];
  /**
   * 性别(0-male,1-female)
   */
  sex: number;
  /**
   * 是否是通过切换用户操作登录的
   */
  switch2Login: boolean;
  /**
   * 租户id
   */
  tenantId: string;
  /**
   * 用户名
   */
  username: string;
  /**
   * 切换用户姓名
   */
  switchOperatorName: string;
}
/**
 * 登录授权
 */
export interface LoginRes {
  /**
   * 是否是通过切换用户操作登录的
   */
  switch2Login: boolean;
  /**
   * 用户所属租户的身份信息
   */
  tenantIdentityList: TenantIdentityList[];
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
  userInfo: UserInfo;
}
/**
 * 应用属性
 */
export interface AppItem {
  /**
   * 应用编码
   */
  code: string;
  /**
   * 是否启用
   */
  enable: boolean;
  /**
   * 主键
   */
  id: string;
  /**
   * 应用名称
   */
  name: string;
}

export type AppsRes = { dataList: AppItem[] };
