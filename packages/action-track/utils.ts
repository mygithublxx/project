/**
 * token 在 localstorage 中的存储字段
 */
const LOCALSTORAGE_TOKEN = "accesstoken";

/**
 * 获取页面的查询条件
 * @param location 路由信息
 * @returns 查询条件
 */
export const getQueryParamsFromLocation = (search: string) => {
  const query = new URLSearchParams(search);
  return Array.from(query.entries())?.reduce<Record<string, string>>(
    (pre, [k, v]) => ({
      ...pre,
      [k]: v,
    }),
    {}
  );
};

/**
 * 获取 token 信息
 */
export const getAuthToken = () => {
  return localStorage.getItem(LOCALSTORAGE_TOKEN);
};
