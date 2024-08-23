const apis = {
  host: "",
  token: {
    prefix: "/api/manager",
    /**
     * {@link http://dev.secp.192.168.221.92.nip.io/api/manager/doc.html#/%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86/%E7%B3%BB%E7%BB%9F%E6%8E%88%E6%9D%83%E6%8E%A5%E5%8F%A3/heartbeatUsingGET doc}
     */
    heartBeat: {
      get: "/auth/heartbeat",
    },
  },
  tasks: {
    prefix: "/api/secp-timer-task",
    /**
     * 注册定时任务
     * {@link http://dev.secp.192.168.221.92.nip.io/api/secp-timer-task/doc.html#/%E5%9B%BA%E5%BE%B7%E5%A8%81%E5%90%8E%E7%AB%AF/timer-controller/storeRegisterInfoUsingPOST doc}
     */
    store: {
      post: "/timer/register_info/store",
    },
    /**
     * 移除定时任务
     * {@link http://dev.secp.192.168.221.92.nip.io/api/secp-timer-task/doc.html#/%E5%9B%BA%E5%BE%B7%E5%A8%81%E5%90%8E%E7%AB%AF/timer-controller/storeRegisterInfoUsingPOST doc}
     */
    remove: {
      post: "/timer/register_info/remove",
    },
  },
  applications: {
    prefix: "/api/manager",
    /**
     * @description 获取所有应用
     * @alias /api/manager/applications
     * @doc http://dev.secp.192.168.221.92.nip.io/api/manager/doc.html#/后台管理/系统应用管理模块/getApplicationListUsingGET
     */
    index: {
      get: "/applications",
    },
    /**
     * @description 获取应用的权限菜单列表
     * @alias /api/manager/applications/{app_code}/permissions
     * @doc http://dev.secp.192.168.221.92.nip.io/api/manager/doc.html#/后台管理/系统应用管理模块/getApplicationPermissionsUsingGET
     */
    show: {
      get: "/applications/{appCode}/permissions",
    },
  },
  user: {
    prefix: "/api/manager",

    /**
     * @description 查询当前用户有权限的应用信息
     * @alias /api/manager/auth/applications
     * @doc http://dev.secp.192.168.221.92.nip.io/api/manager/doc.html#/后台管理/系统授权接口/getApplicationInfosUsingGET
     */
    applications: {
      get: "/auth/applications",
    },
    /**
     * @description 心跳接口
     * @alias /api/manager/auth/heartbeat
     * @doc http://dev.secp.192.168.221.92.nip.io/api/manager/doc.html#/后台管理/系统授权接口/heartbeatUsingGET
     */
    heartbeat: {
      get: "/auth/heartbeat",
    },
    /**
     * @description 登录授权
     * @alias /api/manager/auth/login
     * @doc http://dev.secp.192.168.221.92.nip.io/api/manager/doc.html#/后台管理/系统授权接口/loginUsingPOST
     */
    login: {
      post: "/auth/login",
    },
    /**
     * @description 校验用户登录状态
     * @alias /api/manager/auth/login-status
     * @doc http://dev.secp.192.168.221.92.nip.io/api/manager/doc.html#/后台管理/系统授权接口/checkLoginStatusUsingGET
     */
    loginStatus: {
      get: "/auth/login-status",
    },
    /**
     * @description 登录日志记录
     * @alias /api/manager/auth/loginLog
     * @doc http://dev.secp.192.168.221.92.nip.io/api/manager/doc.html#/后台管理/系统授权接口/loginLogUsingPOST
     */
    loginLog: {
      post: "/auth/loginLog",
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
    /**
     * @description 校验手机号是否已录入系统
     * @alias /api/manager/auth/phone
     * @doc http://dev.secp.192.168.221.92.nip.io/api/manager/doc.html#/后台管理/系统授权接口/checkPhoneNumberExistUsingGET
     */
    phone: {
      get: "/auth/phone",
    },
    /**
     * @description 获取登录短信验证码
     * @alias /api/manager/auth/sms
     * @doc http://dev.secp.192.168.221.92.nip.io/api/manager/doc.html#/后台管理/系统授权接口/sendSmsVerificationCodeUsingGET
     */
    sms: {
      get: "/auth/sms",
    },
    /**
     * @description 校验短信验证码并登录
     * @alias /api/manager/auth/sms-legal-login
     * @doc http://dev.secp.192.168.221.92.nip.io/api/manager/doc.html#/后台管理/系统授权接口/checkSmsCodeLegalAndLoginUsingGET
     */
    smsLogin: {
      get: "/auth/sms-legal-login",
    },
    /**
     * @description 获取当前用户对应应用的收藏菜单列表
     * @alias /api/manager/user/{app_code}/favorite_permissions
     * @doc http://test.secp.192.168.221.92.nip.io/api/manager/doc.html#/后台管理/用户管理模块/getFavoritePermissionsUsingGET
     */
    favoritePermissions: {
      get: "/user/{appCode}/favorite_permissions",
    },
    /**
     * @description 当前用户收藏/取消收藏应用菜单
     * @alias /api/manager/user/{app_code}/favorite_permissions
     * @doc http://dev.secp.192.168.221.92.nip.io/api/manager/doc.html#/%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86/%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%E6%A8%A1%E5%9D%97/favoritePermissionOrComponentUsingPOST
     */
    favorite: {
      post: "/user/{appCode}/favorite_permissions",
    },
  },
  account: {
    prefix: "/api/manager",
    /**
     * @description 获取已登录用户userid加密后的puserid
     * @alias /api/manager/support/puserid
     * @doc http://dev.secp.192.168.221.92.nip.io/api/manager/doc.html#/后台管理/【内部】support对接模块/getPuseridUsingGET
     */
    puserid: {
      get: "/support/puserid",
    },
  },
};

export default apis;
