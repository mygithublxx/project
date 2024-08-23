export default {
  prefix: "/api/micro-grid",
  /**
   * @description 获取用户名下所有的微网物
   * @alias /api/micro-grid/grid/user
   * @doc http://test.secp.192.168.221.92.nip.io/api/micro-grid/doc.html#/%E5%BE%AE%E7%94%B5%E7%BD%91/%E5%BE%AE%E7%BD%91%E5%9F%BA%E7%A1%80%E4%BF%A1%E6%81%AF/getGridThingByUserUsingGET
   */
  gridUser: {
    get: "/grid/user",
  },
  /**
   * @description 按照条件查询项目物（综合能源,场站,分布式光伏电站）
   * @alias /api/micro-grid/grid/project
   * @doc http://test.secp.192.168.221.92.nip.io/api/micro-grid/doc.html#/%E5%BE%AE%E7%94%B5%E7%BD%91/%E5%BE%AE%E7%BD%91%E5%9F%BA%E7%A1%80%E4%BF%A1%E6%81%AF/getProjectThingUsingPOST
   */
  gridList: {
    post: "/grid/project",
  },
  /**
   * 实时功率
   * http://dev.secp.192.168.221.92.nip.io/api/micro-grid/doc.html#/%E5%BE%AE%E7%94%B5%E7%BD%91/%E8%83%BD%E6%BA%90%E6%95%B0%E6%8D%AE%E7%AE%A1%E7%90%86/getTodayPowerValuesUsingGET
   */
  realTimePower: {
    get: "/energy/power",
  },
  realTimeIrradiance: {
    get: "/energy/irradiance",
  },
  batteryListQuery: {
    post: "/api/micro-grid/energy/node_type/{node_type}/things",
  },
  batteryDataQuery: {
    get: "/energy/storage",
  },
  //装机信息
  gridStation: {
    get: "/energy/grid_station",
  },
  //当日发电量
  curDayElectricity: {
    get: "/energy/electricity/today",
  },
  //当月发电量
  curMonthElectricity: {
    get: "/energy/electricity/month",
  },
  //总发电量
  totalElectricity: {
    get: "/energy/electricity/total",
  },
  energySelfUse: {
    get: "/energy/self_use",
  },
  //实时负荷曲线
  loadPower: {
    get: "/energy/load_type",
  },
  //能量流图
  energyStream: {
    get: "/energy/energy_stream",
  },
  // 一次接线图增删改查
  wiring: {
    post: "/wiring",
  },
  getWiring: {
    get: "/wiring/{id}",
  },
  updateWiring: {
    put: "/wiring",
  },
  // 拓扑图增删改查
  thopology: {
    post: "/topology",
  },
  getThopology: {
    get: "/topology/{id}",
  },
  updateThopology: {
    put: "/topology",
  },
  /**
   * 获取微网下所有设备
   * @alias /api/micro-grid/grid/{gridId}/all_devices
   */
  getThings: {
    get: "/grid/{gridId}/all_devices",
  },
  /**
   * @description 根据物sn号获取对应的信息模型对应的词条信息
   * @alias /api/micro-grid/grid/thing/thing_code/{thing_code}
   * @doc http://test.secp.192.168.221.92.nip.io/api/micro-grid/doc.html#/%E5%BE%AE%E7%94%B5%E7%BD%91/%E5%BE%AE%E7%BD%91%E5%9F%BA%E7%A1%80%E4%BF%A1%E6%81%AF/getLemmaInfoBySnUsingGET
   */
  infoEntry: {
    get: "/grid/thing/thing_code/{thing_code}",
  },
  /**
   * 获取微网下充电枪信息
   * @doc http://dev.secp.192.168.221.92.nip.io/api/micro-grid/doc.html#/%E5%BE%AE%E7%94%B5%E7%BD%91/%E5%BE%AE%E7%BD%91%E4%B8%8B%E5%85%85%E7%94%B5%E7%B3%BB%E7%BB%9F%E7%AE%A1%E7%90%86/getChargeRunInfoUsingGET
   * @alias /api/micro-grid/charges_system/gun/run_info
   */
  fetchGun: {
    post: "/charges_system/gun/run_info",
  },
  // 虚拟电厂相关
  /**
   * VPP基本信息
   * @doc http://dev.secp.192.168.221.92.nip.io/api/micro-grid/doc.html#/%E5%BE%AE%E7%94%B5%E7%BD%91/%E8%99%9A%E6%8B%9F%E7%94%B5%E5%8E%82/getAllStationBasicInfoUsingGET
   * @alias /api/micro-grid/virtual/all_station/basic_info
   */
  basicInfo: {
    get: "/virtual/all_station/basic_info",
  },
  //充电枪的台数，最早并网时间
  chargeGunBasicInfo: {
    get: "/charges_system/total/basic_info",
  },
  //获取所有微网充电量，充电次数
  chargesTotalElectricity: {
    get: "/charges_system/total/electricity",
  },
  //获取光伏监测右边统计数据
  generationBasicData: {
    get: "/generation_system/total/basic_data",
  },
  //获取光伏监测右边统计数据
  totalPower: {
    get: "/generation_system/total/power",
  },
  //获取bms node
  bmsNodes: {
    post: "/storage_system/bms/device",
  },
  // 获取BMS功率曲线
  bmsValuesPower: {
    post: "/storage_system/bms/values/power",
  },
  // 获取BMS的SOC曲线
  bmsValuesSoc: {
    post: "/storage_system/bms/values/soc",
  },
  // 获取BMS运行信息
  bmsRunInfo: {
    get: "/storage_system/bms/{nodeId}/run/info",
  },
  // 获取储能系统电量曲线
  storageElec: {
    post: "/storage_system/storage/values/elec",
  },
  // 获取储能系统功率曲线
  storagePower: {
    post: "/storage_system/storage/values/power",
  },
  // 获取储能系统基础信息
  storageBaseInfo: {
    post: "/storage_system/storage/base/info",
  },
  // 获取储能系统运行信息
  storageRunInfo: {
    post: "/storage_system/storage/run/info",
  },

  //资产概览基础信息
  baseInfo: {
    get: "/asset/overview/base_info",
  },

  // 资产概览累计信息
  sumInfo: {
    get: "/asset/overview/sum_info",
  },
  // 实时天气
  realTimeWeather: {
    get: "/weather/{gridId}/realtime",
  },
  downLoadFile: {
    get: "/file/{fileName}",
  },

  //充电系统今日功率曲线
  daliyChargePower: {
    get: "/charges_system/{grid_id}/total/values/power",
  },
  wiringGun: {
    get: "/charges_system/{grid_id}/wiring/gun",
  },
};
