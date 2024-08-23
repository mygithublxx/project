import { AppearanceProps } from "../../../../../appearance/dto";

/**
 *
 */
export interface HelpCenterProps
  extends Pick<AppearanceProps, "isI18N" | "app" | "themeCode"> {
  /**
   * 打开反馈建议弹窗
   */
  onOpenFeedBackModal: () => void;
}
