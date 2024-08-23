import apis from "../api";
import { type CustomOptions, Request } from "@gw/gw-request";
import { message } from "@gw/web-basic-components";

setTimeout(() => {
  message.config?.({
    maxCount: 1,
  });
}, 0);

class BusinessRequest extends Request {
  protected onSSOLogin(loginUrl: string): void {
    try {
      if (typeof _doc_ !== "undefined" && _doc_) {
        location.replace("/docs/login");
      } else if (process.env.NODE_ENV === "development") {
        const path = `${location.origin}/#/login`;
        window.location.href = path;
      } else {
        super.onSSOLogin(loginUrl);
      }
    } catch (error) {
      console.error(error);
      super.onSSOLogin(loginUrl);
    }
  }
}

const BusinessCustomRequestOptions: CustomOptions = {
  projectName: "we-business-components",
  onErrorMessage: (err: string) => {
    if (err === "当前微网下该类型接线图已存在") {
      return null;
    }
    return message.error(err);
  },
};

const request = new BusinessRequest(apis, BusinessCustomRequestOptions);

export default request.useRequest;
