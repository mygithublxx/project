import React, { useEffect, useMemo } from "react";
import classNames from "classnames";
import { useRequest, apis } from "../../../appearance/utils";
import { OdmCaseEnum, odmCaseFilter } from "../../../utils";
import type { LogoMap, LogoProps, LogoReq, LogoRes, Logos } from "./dto";

import PlatformLogo from "../../assets/logo/logo_platform.png";
import { ReactComponent as PlatformLogoSmall } from "../../assets/logo/logo_platform_s.svg";
import OppLogo from "../../assets/logo/logo_opp.png";
import { ReactComponent as OppLogoSmall } from "../../assets/logo/logo_opp_s.svg";

import SeedsLogo from "../../assets/logo/logo_seeds.png";
import SeedsLogoSmall from "../../assets/logo/logo_seeds_s.png";

import SeedsSHMobileLogo from "../../assets/logo/logo_seeds_shmobile.png";
import SeedsSHMobileLogoSmall from "../../assets/logo/logo_seeds_shmobile_s.png";
import BaobiPerformanceLogo from "../../assets/logo/logo_baobi_performance.png";
import BaobiWorkLogo from "../../assets/logo/logo_baobi_work.png";
import BaobiSmallLogo from "../../assets/logo/logo_baobi_s.png";
import { ReactComponent as NewPowerLogo } from "../../assets/logo/logo_power_new.svg";
// 临时替换为苏高新的logo
// import { ReactComponent as NewPowerLogo } from "../../assets/logo/suzhou_new_dist.svg";
import { ReactComponent as PowerLogoSmall } from "../../assets/logo/logo_power_s.svg";
import StarLogo from "../../assets/logo/logo_star.png";
import { ReactComponent as StarLogoSmall } from "../../assets/logo/logo_star_s.svg";

/** 默认应用左上角logo */
const DEFAULT_LOGOS = [
  <img key="sh-seeds-logo" src={SeedsLogo} alt="" />,
  <img key="sh-seeds-logo-small" src={SeedsLogoSmall} alt="" />,
] as const;

/** 保碧默认logo */
const createBaobiLogos = (app: string, type: "work" | "performance"): Logos => {
  const key = `${app}-logo`,
    smKey = `${key}-small`;
  const smallLogo = <img key={smKey} src={BaobiSmallLogo} alt="" />;
  const logo =
    type === "work" ? (
      <img key={key} src={BaobiWorkLogo} alt="" />
    ) : (
      <img key={key} src={BaobiPerformanceLogo} alt="" />
    );
  return [logo, smallLogo];
};

/** 根据odmCase返回筛选并设置默认值为goodwe选项 */
const odmCaseFilterWithDefaultGoodwe = <
  T extends {
    [K in OdmCaseEnum.Goodwe]: Logos;
  } & {
    [K in OdmCaseEnum]?: Logos;
  } = {
    [OdmCaseEnum.Goodwe]: Logos;
  }
>(
  params: T
) => {
  const defaultGoodwe = params[OdmCaseEnum.Goodwe];
  return odmCaseFilter(params, defaultGoodwe);
};
/**
 * Logo区域
 */
const Logo = (props: LogoProps) => {
  const { collapsed, renderModule } = props;

  const userInfo = JSON.parse(localStorage.getItem("userinfo") || "{}");
  const tenantId = userInfo?.tenantId;

  /**
   * 获取平台配置的logo
   */
  const [{ data: logoData }, fetchLogo] = useRequest<LogoReq, LogoRes>(
    apis.tenant.logos
  );

  /**
   * logo映射
   * @todo 需要结合tenant一起去判断，比如上海移动；
   */
  const iconMap = useMemo<LogoMap>(() => {
    return {
      Platform: odmCaseFilterWithDefaultGoodwe({
        [OdmCaseEnum.Goodwe]: [
          <img key="paltform-logo" src={PlatformLogo} alt="" />,
          <PlatformLogoSmall key="paltform-logo-small" />,
        ],
        [OdmCaseEnum.Baobi]: createBaobiLogos("platform", "work"),
      }),
      "WE-OPP": odmCaseFilterWithDefaultGoodwe({
        [OdmCaseEnum.Goodwe]: [
          <img key="opp-logo" src={OppLogo} alt="" />,
          <OppLogoSmall key="opp-small-logo" />,
        ],
        [OdmCaseEnum.Baobi]: createBaobiLogos("opp", "work"),
      }),
      "We-Seeds-Pro": odmCaseFilterWithDefaultGoodwe({
        [OdmCaseEnum.Shyd]: [
          <img key="sh-seeds-pro-logo" src={SeedsSHMobileLogo} alt="" />,
          <img
            key="sh-seeds-pro-logo-small"
            src={SeedsSHMobileLogoSmall}
            alt=""
          />,
        ],
        [OdmCaseEnum.Goodwe]: DEFAULT_LOGOS,
        [OdmCaseEnum.Baobi]: createBaobiLogos("seeds-pro", "work"),
      }),
      "We-Seeds": odmCaseFilterWithDefaultGoodwe({
        [OdmCaseEnum.Goodwe]: [
          <img key="seeds-logo" src={SeedsLogo} alt="" />,
          <img key="seeds-logo-small" src={SeedsLogoSmall} alt="" />,
        ],
        [OdmCaseEnum.Baobi]: createBaobiLogos("seeds", "performance"),
      }),
      Power: odmCaseFilterWithDefaultGoodwe({
        [OdmCaseEnum.Goodwe]: [
          <img key="power-logo" src={SeedsLogo} alt="" />,
          <img key="power-logo-small" src={SeedsLogoSmall} alt="" />,
        ],
        [OdmCaseEnum.Baobi]: createBaobiLogos("power", "performance"),
      }),
      "We-Power-New": odmCaseFilterWithDefaultGoodwe({
        [OdmCaseEnum.Goodwe]: [
          <NewPowerLogo key="power-new-logo" />,
          <PowerLogoSmall key="power-new-logo-small" />,
        ],
        [OdmCaseEnum.Baobi]: createBaobiLogos("power-new", "performance"),
      }),
      Support: odmCaseFilterWithDefaultGoodwe({
        [OdmCaseEnum.Goodwe]: [
          <img key="support-logo" src={SeedsLogo} alt="" />,
          <img key="support-logo-small" src={SeedsLogoSmall} alt="" />,
        ],
        [OdmCaseEnum.Baobi]: createBaobiLogos("support", "work"),
      }),
      "We-Star": odmCaseFilterWithDefaultGoodwe({
        [OdmCaseEnum.Goodwe]: [
          <img key="star-logo" src={StarLogo} alt="" />,
          <StarLogoSmall key="star-logo-small" />,
        ],
        [OdmCaseEnum.Baobi]: createBaobiLogos("star", "performance"),
      }),
      "We-Security": odmCaseFilterWithDefaultGoodwe({
        [OdmCaseEnum.Goodwe]: [
          <img key="star-logo" src={StarLogo} alt="" />,
          <StarLogoSmall key="star-logo-small" />,
        ],
        [OdmCaseEnum.Baobi]: createBaobiLogos("security", "performance"),
      }),
    };
  }, [tenantId]);

  /**
   * 通过api获取的logo
   */
  const imageFromApi = useMemo(() => {
    if (!logoData) {
      return null;
    }
    const big = logoData?.pageLogoFileUrl;
    const small = logoData?.squareLogoFileUrl;
    return [
      big ? <img key={"big"} src={big} alt="" /> : null,
      small ? <img key={"small"} src={small} alt="" /> : null,
    ];
  }, [logoData]);

  const image = useMemo(() => {
    if (!iconMap) return <></>;
    const index = Number(collapsed);
    return (
      imageFromApi?.[index] ??
      iconMap[props.app]?.[index] ??
      DEFAULT_LOGOS[index]
    );
  }, [props.app, collapsed, iconMap, imageFromApi]);

  /**
   * 默认加载logo
   */
  useEffect(() => {
    if (renderModule) return;
    if (!props.app) return;
    fetchLogo({ applicationCode: props.app });
  }, [props.app]);

  const Layout = useMemo(() => {
    return React.createElement("div", {
      className: classNames("wbuc-logo-area", props.className, {
        "wbuc-logo-area-collapsed": collapsed,
      }),
    });
  }, [collapsed]);

  if (renderModule?.render) {
    return renderModule.render({ Layout }, { collapsed });
  }
  return React.cloneElement(Layout, {}, image);
};

export default Logo;
