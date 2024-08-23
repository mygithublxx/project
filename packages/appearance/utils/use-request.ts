import { BusinessRequest, BusinessCustomRequestOptions } from "../../utils";

const apis = {
  host: "",
  applications: {
    prefix: "/api/manager",
    /**
     * @description 获取应用的权限菜单列表
     * @alias /api/manager/applications/{app_code}/permissions
     * @doc http://dev.secp.192.168.221.92.nip.io/api/manager/doc.html#/后台管理/系统应用管理模块/getApplicationPermissionsUsingGET
     */
    show: {
      get: "/applications/{appCode}/permissions",
    },
  },
  document: {
    prefix: "/api/sniper",
    /**
     * @description 分页查询平台的所有文档
     * @alias/api/sniper/documents/page
     * @doc http://test.secp.192.168.221.92.nip.io/api/sniper/doc.html#/%E5%90%8E%E5%8F%B0-%E7%89%A9%E7%AE%A1%E7%90%86/%E5%B9%B3%E5%8F%B0-%E6%96%87%E6%A1%A3%E7%AE%A1%E7%90%86%E4%B8%AD%E5%BF%83/pageDocumentsUsingPOST
     */
    getDocuments: {
      post: "/documents/page",
    },
  },
  account: {
    prefix: "/api/manager",
    /**
     * @description 更换用户头像
     * @alias /api/manager/user/avatars
     * @doc http://dev.secp.192.168.221.92.nip.io/api/manager/doc.html#/后台管理/用户管理模块/updateUserAvatarUsingPUT
     */
    avatars: {
      put: "/user/avatars",
    },
    /**
     * @description 获取默认用户头像列表
     * @alias /api/manager/user/avatars/default
     * @doc http://dev.secp.192.168.221.92.nip.io/api/manager/doc.html#/后台管理/用户管理模块/getDefaultUserAvatarsUsingGET
     */
    default: {
      get: "/user/avatars/default",
    },
    /**
     * @description 查询当前用户信息
     * @alias /api/manager/user/current
     * @doc http://dev.secp.192.168.221.92.nip.io/api/manager/doc.html#/后台管理/用户管理模块/getCurrentUserInfoUsingGET
     */
    current: {
      get: "/user/current",
    },
    /**
     * @description 重置密码
     * @alias /api/manager/user/password/reset
     * @doc http://dev.secp.192.168.221.92.nip.io/api/manager/doc.html#/后台管理/用户管理模块/resetPasswordUsingPOST
     */
    reset: {
      post: "/user/password/reset",
    },
    /**
     * @description 获取已登录用户userid加密后的puserid
     * @alias /api/manager/support/puserid
     * @doc http://dev.secp.192.168.221.92.nip.io/api/manager/doc.html#/后台管理/【内部】support对接模块/getPuseridUsingGET
     */
    puserid: {
      get: "/support/puserid",
    },
  },
  user: {
    prefix: "/api/manager",
    /**
     * @description 获取当前用户对应应用的收藏菜单列表
     * @alias /api/manager/user/{app_code}/favorite_permissions
     * @doc http://test.secp.192.168.221.92.nip.io/api/manager/doc.html#/后台管理/用户管理模块/getFavoritePermissionsUsingGET
     */
    favoritePermissions: {
      get: "/user/{appCode}/favorite_permissions",
    },
    /**
     * @description 退出登录
     * @alias /api/manager/auth/logout
     * @doc http://dev.secp.192.168.221.92.nip.io/api/manager/doc.html#/后台管理/系统授权接口/logoutUsingGET_1
     */
    logout: {
      get: "/auth/logout",
    },
    /**
     * @description 查询当前用户的权限信息
     * @alias /api/manager/auth/permission
     * @doc http://dev.secp.192.168.221.92.nip.io/api/manager/doc.html#/后台管理/系统授权接口/getPermissionUsingGET
     */
    permission: {
      get: "/auth/permission",
    },
  },
  feedback: {
    prefix: "/api/manager",
    /**
     * @description 提交用户反馈（平台级）
     * @alias /api/manager/userFeedbacks/platform
     * @doc http://dev.secp.192.168.221.92.nip.io/api/manager/doc.html#/后台管理/用户反馈相关接口/submitPlatformUsingPOST
     */
    platform: {
      post: "/userFeedbacks/platform",
    },
  },
  switchuser: {
    prefix: "/api/manager",
    /**
     * @description 退出当前身份
     * @alias /api/manager/switch_user/quit_switched_user
     * @doc http://apisix.192.168.221.92.nip.io/api/manager/doc.html#/后台管理/切换用户/logoutUsingGET_2
     */
    logout: {
      get: "/switch_user/quit_switched_user",
    },
  },
  tenant: {
    prefix: "/api/watchman",
    /**
     * @description 获取当前租户的 Logo 信息
     * @alias /api/watchman/tenant/customs/applications/{application_code}/logos
     * @doc https://test.secp.192.168.221.92.nip.io/api/watchman/doc.html#/智慧电站/租户自定义信息/getTenantLogoUsingGET
     */
    logos: {
      get: "/tenant/customs/applications/{applicationCode}/logos",
    },
  },
};

const request = new BusinessRequest(apis, BusinessCustomRequestOptions);

export { apis };
export default request.useRequest;
