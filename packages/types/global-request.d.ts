/**
 * 分页数据
 */
// interface IResDataList<T = any> {
//   current: number;
//   dataList: T[];
//   size: number;
//   total: number;
// }
/**
 * 接口返回基本结构
 */
interface IResponse<T> {
  code: string;
  data: T;
  errorMsg: string;
  description: string;
}

interface FormItemRequestProps {
  formInstance?: any;
  children?: React.ReactElement;
}
