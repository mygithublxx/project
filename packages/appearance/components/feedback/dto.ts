import type { AppearanceProps } from "../../../appearance/dto";

export interface FeedbackProps
  extends Pick<AppearanceProps, "isI18N" | "app" | "themeCode"> {
  container: React.MutableRefObject<HTMLDivElement>;
}
