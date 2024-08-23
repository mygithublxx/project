/**
 * 用户头像
 */
export interface AvatarItem {
  /**
   * 默认头像图片的 code
   */
  avatarCode: string;
  /**
   * 头像图片的链接
   */
  avatarFileUrl: string;
}

export type AvatarListRes = IResDataList<AvatarItem>;
