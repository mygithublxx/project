import { Request } from "@gw/gw-request";
import { message } from "@gw/web-basic-components";
import apis from "./api";

const request = new (class extends Request {
  protected onSSOLogin(loginUrl: string): void {
    if (_doc_) {
      location.replace("/docs/login");
    } else {
      super.onSSOLogin(loginUrl);
    }
  }
})(apis, {
  projectName: "we-business-components",
  onErrorMessage: (err: string) => message.error(err),
});

export default request.useRequest;
