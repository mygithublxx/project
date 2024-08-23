export default {
  prefix: "/api/diagram/wiring/",
  /**
   * @description 保存主图
   * @alias /api/diagram/wiring/master/store
   * @doc http://dev.secp.192.168.221.92.nip.io/api/diagram/doc.html#/接线图/新版-主图/storeMasterGraphUsingPOST
   */
  store: {
    post: "/master/store",
  },
  /**
   * @description 获取接线图（主图）数据
   * @alias /api/diagram/wiring/{thing_project_id}/{category}
   * @doc http://dev.secp.192.168.221.92.nip.io/api/diagram/doc.html#/接线图/接线图-主图/getWiringCellsJsonUsingGET
   */
  getWiring: {
    get: "/{thingProjectId}/{category}",
  },
  /**
   * @description 更新接线图
   * @alias /api/diagram/wiring
   * @doc http://test.secp.192.168.221.92.nip.io/api/diagram/doc.html#/%E6%8E%A5%E7%BA%BF%E5%9B%BE/%E6%8E%A5%E7%BA%BF%E5%9B%BE/addWiringCellsJsonUsingPOST
   */
  updateWiring: {
    put: "/",
  },
  /**
   * @description 删除接线图
   * @alias /api/diagram/wiring
   * @doc http://test.secp.192.168.221.92.nip.io/api/diagram/doc.html#/%E6%8E%A5%E7%BA%BF%E5%9B%BE/%E6%8E%A5%E7%BA%BF%E5%9B%BE/addWiringCellsJsonUsingPOST
   */
  deleteWiring: {
    delete: "/",
  },
  /**
   * @description 复制分图
   * @alias /api/diagram/wiring/sub/copy/{wiring_id}
   * @doc http://dev.secp.192.168.221.92.nip.io/api/diagram/doc.html#/接线图/新版-分图中心/copyWiringUsingPOST
   */
  copySub: {
    get: "/sub/copy/{wiringId}",
  },
  /**
   * @description 删除分图
   * @alias /api/diagram/wiring/sub/delete/{wiring_id}
   * @doc http://dev.secp.192.168.221.92.nip.io/api/diagram/doc.html#/接线图/新版-分图中心/deleteWiringUsingDELETE
   */
  deleteSub: {
    delete: "/sub/delete/{wiringId}",
  },
  /**
   * @description 查看分图
   * @alias /api/diagram/wiring/sub/get/{wiring_id}
   * @doc http://dev.secp.192.168.221.92.nip.io/api/diagram/doc.html#/接线图/新版-分图中心/getSubDetailUsingPOST
   */
  getSub: {
    get: "/sub/get/{wiringId}",
  },
  /**
   * @description 获取分图列表
   * @alias /api/diagram/wiring/sub/list
   * @doc http://dev.secp.192.168.221.92.nip.io/api/diagram/doc.html#/接线图/新版-分图中心/getSubGraphListUsingPOST
   */
  listSub: {
    post: "/sub/list",
  },
  /**
   * @description 保存分图
   * @alias /api/diagram/wiring/sub/store
   * @doc http://dev.secp.192.168.221.92.nip.io/api/diagram/doc.html#/接线图/新版-分图中心/storeSubGraphUsingPOST
   */
  storeSub: {
    post: "/sub/store",
  },
};
