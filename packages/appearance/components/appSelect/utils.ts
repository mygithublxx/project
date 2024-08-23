import { orderBy } from "lodash";
import centerCenter from "@gw/odm-db";
import type { AppItem, IAppOption, IGroupInfo, AppSelectProps } from "./dto";

const { cdn } = centerCenter;

/**
 * 根据code转义key
 * @param code string
 */
export function getKey(code: string) {
  return code.toLocaleLowerCase().replace("we-", "").replace("-", "");
}

/** 卡片背景静态资源地址目录 */
const CARD_BG_PREFIX = "static/lib/web-business-components/img";

/**
 * 根据appCode获取图片地址
 * @param code 应用code
 * @returns url
 */
export const getCardBg = (code: string) => {
  return `${cdn}/${CARD_BG_PREFIX}/app-card-bg-${code}.png`;
};

/**
 * 将数据映射成AppSelect需要的数组
 * @param data 数组
 * @returns options
 */
export function mapAppOptions(data: Record<string, any>[]): IAppOption[] {
  return data.map((m, i) => ({
    label: m.name,
    value: m.code,
    index: i,
    i18nKey: m.i18nKey,
    bg: m.bg || getCardBg(getKey(m.code)),
  }));
}

/**
 * 根据当前应用找出同组应用
 * @param act 当前应用code
 * @param data 当前租户下所有应用
 * @returns 同组应用
 */
export function getAppInGroup(act: string, data: AppItem[]) {
  //当前应用所属分组号
  const groupIds =
    data.find((d) => d.code === act)?.groupInfo?.map((g) => g.groupId) || [];

  if (!groupIds?.length) return [];

  //数据分组信息扁平化处理
  const dataInfo: (AppItem & IGroupInfo)[] = data.flatMap((d) =>
    d.groupInfo.map((g) => ({ ...d, ...g }))
  );

  //取出同组应用
  const groupMember = dataInfo.filter((d) =>
    groupIds.some((id) => d.enable && id === d.groupId)
  );

  //根据groupId 和 order进行排序
  const groupSort: (AppItem & IGroupInfo)[] = orderBy(groupMember, [
    "groupId",
    "order",
  ]);

  const res = mapAppOptions(groupSort);

  return res;
}

/**
 * 取出给定名单中的应用
 * @param act 当前应用code
 * @param list 给定的名单
 */
export function getAppInList(list: AppSelectProps["appList"], data: AppItem[]) {
  const res = [];
  list.forEach(({ code, bg }) => {
    const item = data.find((m) => m.code === code);
    if (item) res.push(Object.assign(item, { bg }));
  });
  return mapAppOptions(res);
}
