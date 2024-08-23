import { type CustomOptions, Request } from "@gw/gw-request";
import { message } from "@gw/web-basic-components";
import apis from "./apis";

setTimeout(() => {
  message.config?.({
    maxCount: 1,
  });
}, 0);
console.log(Request);

class BusinessRequest extends Request {
  protected onSSOLogin(loginUrl: string): void {
    console.log("zoule");

    try {
      if (typeof _doc_ !== "undefined" && _doc_) {
        console.log("zoule1");

        location.replace("/docs/login");
      } else if (process.env.NODE_ENV === "development") {
        console.log("zoule2");

        const path = `${location.origin}/#/login`;
        window.location.href = path;
      } else {
        console.log("zoule3");

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
  onErrorMessage: (err: string) => message.error(err),
};

const request = new BusinessRequest(apis, BusinessCustomRequestOptions);

export { BusinessRequest, BusinessCustomRequestOptions };

export default request.useRequest;
