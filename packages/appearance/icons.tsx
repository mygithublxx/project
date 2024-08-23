import React, { ReactNode } from "react";
import { ReactComponent as TenantMgtIcon } from "./assets/menu-icon/user/tenantMgt.svg";
import { ReactComponent as UserPermissionIcon } from "./assets/menu-icon/user/userPermission.svg";
import { ReactComponent as PortalIcon } from "./assets/menu-icon/user/portal.svg";
import { ReactComponent as FeedbackMgtIcon } from "./assets/menu-icon/user/customer.svg";

import { ReactComponent as EnterpriseMgtIcon } from "./assets/menu-icon/structure/enterpriseMgt.svg";
import { ReactComponent as AssetsMgtIcon } from "./assets/menu-icon/structure/assetsMgt.svg";
import { ReactComponent as TopologyMgtIcon } from "./assets/menu-icon/structure/topologyMgt.svg";
import { ReactComponent as DictionaryMgtIcon } from "./assets/menu-icon/structure/dictionaryMgt.svg";
import { ReactComponent as DiagramMgtIcon } from "./assets/menu-icon/structure/diagramMgt.svg";

import { ReactComponent as ThingMgtIcon } from "./assets/menu-icon/iot/thingMgt.svg";
import { ReactComponent as IndicatorMgtIcon } from "./assets/menu-icon/iot/indicatorMgt.svg";
import { ReactComponent as InfoModelMgtIcon } from "./assets/menu-icon/iot/infoModelMgt.svg";

import { ReactComponent as CtrlIcon } from "./assets/menu-icon/expense/ctrl.svg";
import { ReactComponent as PlantMgtIcon } from "./assets/menu-icon/expense/plantMgt.svg";
import { ReactComponent as SettlementIcon } from "./assets/menu-icon/expense/settlement.svg";
import { ReactComponent as ExpenseMgtIcon } from "./assets/menu-icon/expense/expenseMgt.svg";
import { ReactComponent as DeliveryIcon } from "./assets/menu-icon/expense/delivery.svg";

import { ReactComponent as DataQualityIcon } from "./assets/menu-icon/data/dataQuality.svg";
import { ReactComponent as SupportDataMgtIcon } from "./assets/menu-icon/data/supportDataMgt.svg";
import { ReactComponent as DataQueryIcon } from "./assets/menu-icon/data/dataQuery.svg";
import { ReactComponent as DataSyncIcon } from "./assets/menu-icon/data/dataSync.svg";

import { ReactComponent as AlarmTypeMgtIcon } from "./assets/menu-icon/alert/alarmTypeMgt.svg";
import { ReactComponent as AlarmEventMgtIcon } from "./assets/menu-icon/alert/alarmEventMgt.svg";

import { ReactComponent as MyAsset } from "./assets/menu-icon/seeds-pro/my_asset.svg";
import { ReactComponent as ParkHomepage } from "./assets/menu-icon/seeds-pro/park_homepage.svg";
import { ReactComponent as OmDashboard } from "./assets/menu-icon/seeds-pro/om_dashboard.svg";
import { ReactComponent as AssetManagementCenter } from "./assets/menu-icon/seeds-pro/asset_management_center.svg";
import { ReactComponent as OperationMgtCenter } from "./assets/menu-icon/seeds-pro/operation_mgt_center.svg";
import { ReactComponent as SettlementCenter } from "./assets/menu-icon/seeds-pro/settlement_center.svg";
import { ReactComponent as ValueAddedCenter } from "./assets/menu-icon/seeds-pro/value_added_center.svg";
import { ReactComponent as DataCenter } from "./assets/menu-icon/seeds-pro/data_center.svg";

import {
  AssetManagementCenter as AssetManagementCenterBaobi,
  DataCenter as DataCenterBaobi,
  MyAsset as MyAssetBaobi,
  OmDashboard as OmDashboardBaobi,
  OperationMgtCenter as OperationMgtCenterBaobi,
  SettlementCenter as SettlementCenterBaobi,
  ValueAddedCenter as ValueAddedCenterBaobi,
} from "../baobi-appearance/menu/seeds-pro";

import { ReactComponent as EarthIcon } from "./assets/menu-icon/we-power-new/earth.svg";
import { ReactComponent as SystemOverviewIcon } from "./assets/menu-icon/we-power-new/system_overview.svg";
import { ReactComponent as MasterWiringDiagramIcon } from "./assets/menu-icon/we-power-new/master_wiring_diagram.svg";
import { ReactComponent as SysMonitorIcon } from "./assets/menu-icon/we-power-new/sys_monitor.svg";
import { ReactComponent as ControlPoliciesIcon } from "./assets/menu-icon/we-power-new/control_policies.svg";
import { ReactComponent as DataAnalysisIcon } from "./assets/menu-icon/we-power-new/data_analysis.svg";
import { ReactComponent as AlarmAnalysisIcon } from "./assets/menu-icon/we-power-new/alarm_analysis.svg";
import { ReactComponent as EnergyManagementIcon } from "./assets/menu-icon/we-power-new/energy_management.svg";
import { ReactComponent as RapidStationBuildingIcon } from "./assets/menu-icon/we-power-new/rapid_station_building.svg";
import { ReactComponent as ReportMgtIcon } from "./assets/menu-icon/we-power-new/report.svg";

import { ReactComponent as TransactionManagementIcon } from "./assets/menu-icon/star/transaction_management.svg";
import { ReactComponent as ResourceManagementIcon } from "./assets/menu-icon/star/resource-management.svg";
import { ReactComponent as SchedulingManagementIcon } from "./assets/menu-icon/star/scheduling-management.svg";
import { ReactComponent as SystemConfig } from "./assets/menu-icon/star/systemConfig.svg";
import { OdmCaseEnum, odmCaseFilter } from "../utils";

type IMenuIcon = Record<keyof ComponentIds, ReactNode>;
/**
 * 菜单图标映射
 */
const MenuIconMap: IMenuIcon = {
  /** platform */
  tenant_menu: <TenantMgtIcon />,
  userPermission: <UserPermissionIcon />,
  menu: <PortalIcon />,
  feedbackMgt: <FeedbackMgtIcon />,
  enterpriseMgt: <EnterpriseMgtIcon />,
  AssetMgt: <AssetsMgtIcon />,
  topologyMgt: <TopologyMgtIcon />,
  dictionaryMgt: <DictionaryMgtIcon />,
  diagramMgt: <DiagramMgtIcon />,
  thingMgt: <ThingMgtIcon />,
  indicatorMgt: <IndicatorMgtIcon />,
  infoModelMgt: <InfoModelMgtIcon />,
  ctrl: <CtrlIcon />,
  plantMgt: <PlantMgtIcon />,
  settlements: <SettlementIcon />,
  accountcenter_expense: <ExpenseMgtIcon />,
  dataQuality: <DataQualityIcon />,
  support_data: <SupportDataMgtIcon />,
  query: <DataQueryIcon />,
  dataSyncMgt: <DataSyncIcon />,
  alarmTypeMgt: <AlarmTypeMgtIcon />,
  alarmEventMgt: <AlarmEventMgtIcon />,
  /** seeds-pro */
  my_asset: odmCaseFilter({
    [OdmCaseEnum.Goodwe]: <MyAsset />,
    [OdmCaseEnum.Baobi]: <MyAssetBaobi />,
  }),
  park_homepage: odmCaseFilter({
    [OdmCaseEnum.Goodwe]: <ParkHomepage />,
    [OdmCaseEnum.Baobi]: <ParkHomepage />,
  }),
  om_dashboard: odmCaseFilter({
    [OdmCaseEnum.Goodwe]: <OmDashboard />,
    [OdmCaseEnum.Baobi]: <OmDashboardBaobi />,
  }),
  asset_management_center: odmCaseFilter({
    [OdmCaseEnum.Goodwe]: <AssetManagementCenter />,
    [OdmCaseEnum.Baobi]: <AssetManagementCenterBaobi />,
  }),
  operation_mgt_center: odmCaseFilter({
    [OdmCaseEnum.Goodwe]: <OperationMgtCenter />,
    [OdmCaseEnum.Baobi]: <OperationMgtCenterBaobi />,
  }),
  settlement_center: odmCaseFilter({
    [OdmCaseEnum.Goodwe]: <SettlementCenter />,
    [OdmCaseEnum.Baobi]: <SettlementCenterBaobi />,
  }),
  data_center: odmCaseFilter({
    [OdmCaseEnum.Goodwe]: <DataCenter />,
    [OdmCaseEnum.Baobi]: <DataCenterBaobi />,
  }),
  value_added_center: odmCaseFilter({
    [OdmCaseEnum.Goodwe]: <ValueAddedCenter />,
    [OdmCaseEnum.Baobi]: <ValueAddedCenterBaobi />,
  }),
  /** power */
  assets_overview: <EarthIcon />,
  system_overview: <SystemOverviewIcon />,
  master_wiring_diagram: <MasterWiringDiagramIcon />,
  sys_monitor: <SysMonitorIcon />,
  control_policies: <ControlPoliciesIcon />,
  data_analysis: <DataAnalysisIcon />,
  alarm_analysis: <AlarmAnalysisIcon />,
  energy_management: <EnergyManagementIcon />,
  rapid_station_building: <RapidStationBuildingIcon />,
  // 报表icon
  report_management: <ReportMgtIcon />,
  // suzhou园区概览icon
  suzhou_park_overview: <SystemOverviewIcon />,
  /** star */
  transaction_management: <TransactionManagementIcon />,
  resource_aggregation_management: <ResourceManagementIcon />,
  scheduling_management: <SchedulingManagementIcon />,
  system_config: <SystemConfig />,
  /** opp */
  station_opration: <TenantMgtIcon />,
  data_management: <SupportDataMgtIcon />,
  system_management: <UserPermissionIcon />,
  tenant_management: <PortalIcon />,
  configure_management: <PlantMgtIcon />,
  delivery_management: <DeliveryIcon />,
  iot_management: <ThingMgtIcon />,
};

/**
 * 获取菜单图标
 * @param componentId 组件id 唯一
 * @returns
 */
const MenuIcon = (componentId: string, icons?: Record<string, ReactNode>) => {
  const children = icons?.[componentId] || MenuIconMap[componentId];
  if (!children) return null;
  return (
    <span className="wbuc-menu-icon">
      {React.cloneElement(children, {
        style: {
          width: "1.25rem",
          height: "1.25rem",
        },
      })}
    </span>
  );
};

/**
 * 组件id类型
 */
type ComponentId = string;
/**
 * WE-Platform 组件id集合
 */
interface PlatformComponentIds {
  //租户管理
  tenant_menu: ComponentId;
  //用户与权限
  userPermission: ComponentId;
  //门户管理
  menu: ComponentId;
  //客服管理
  feedbackMgt: ComponentId;
  //组织架构管理
  enterpriseMgt: ComponentId;
  //资产分享
  AssetMgt: ComponentId;
  //拓扑图管理
  topologyMgt: ComponentId;
  //平台字典表
  dictionaryMgt: ComponentId;
  // 接线图管理
  diagramMgt: ComponentId;
  //物管理
  thingMgt: ComponentId;
  //指标库
  indicatorMgt: ComponentId;
  //信息模型管理
  infoModelMgt: ComponentId;
  //电费管理
  accountcenter_expense: ComponentId;
  //设备控制
  ctrl: ComponentId;
  //平台管理
  plantMgt: ComponentId;
  //平台结算
  settlements: ComponentId;
  //数据质量
  dataQuality: ComponentId;
  //数据维护
  support_data: ComponentId;
  //数据查询
  query: ComponentId;
  //数据同步
  dataSyncMgt: ComponentId;
  //事件管理
  alarmTypeMgt: ComponentId;
  //消息管理
  alarmEventMgt: ComponentId;
}
/**
 * WE 工作模式 组件id集合
 */
interface SeedsProComponentIds {
  //我的资产
  my_asset: ComponentId;
  // 园区主页
  park_homepage: ComponentId;
  //运维工作台
  om_dashboard: ComponentId;
  // 资产中心
  asset_management_center: ComponentId;
  // 运管中心
  operation_mgt_center: ComponentId;
  // 结算中心
  settlement_center: ComponentId;
  // 数据中心
  data_center: ComponentId;
  // 增值中心
  value_added_center: ComponentId;
}
/**
 * WE-Power暗黑工作模式组件id集合
 */
interface PowerNewComponentIds {
  // 资产概览
  assets_overview: ComponentId;
  // 系统概览
  system_overview: ComponentId;
  // 主接线图
  master_wiring_diagram: ComponentId;
  // 系统监控
  sys_monitor: ComponentId;
  // 控制策略
  control_policies: ComponentId;
  // 数据分析
  data_analysis: ComponentId;
  // 告警分析
  alarm_analysis: ComponentId;
  // 能耗管理
  energy_management: ComponentId;
  // 快速建站
  rapid_station_building: ComponentId;
  // 报表管理
  report_management: ComponentId;
  // 苏州园区概览
  suzhou_park_overview: ComponentId;
}
/**
 * WE-Star 组件id集合
 */
interface StarComponentIds {
  /** 交易管理 */
  transaction_management: ComponentId;
  /** 资源管理 */
  resource_aggregation_management: ComponentId;
  /** 调度管理 */
  scheduling_management: ComponentId;
  /** 系统设置 */
  system_config: ComponentId;
}
/** 运营平台 组件id集合 */
interface OppComponentIds {
  /** 电站运营 */
  station_opration: ComponentId;
  /** 数据管理 */
  data_management: ComponentId;
  /** 系统管理 */
  system_management: ComponentId;
  /** 租户管理 */
  tenant_management: ComponentId;
  /** 配置管理*/
  configure_management: ComponentId;
  /** 实施交付管理*/
  delivery_management: ComponentId;
  /** IOT管理 */
  iot_management: ComponentId;
}
/**
 * 组件id集合
 */
type ComponentIds = PlatformComponentIds &
  SeedsProComponentIds &
  PowerNewComponentIds &
  StarComponentIds &
  OppComponentIds;

export default MenuIcon;
