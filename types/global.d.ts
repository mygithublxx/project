/**
 * ts Declaration
 */
declare module "*.module.less" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "@gw/web-business-components" {
  export * from "packages";
}
declare module "*.png";
declare module "*.jpg";
declare module "*.gif";
declare module "*.jpeg";
declare module "*.svg";

declare const _doc_: boolean;
