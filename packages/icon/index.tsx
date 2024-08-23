import React, { ReactNode } from "react";
import { ReactComponent as EditIcon } from "./assets/edit.svg";
import { ReactComponent as DeleteIcon } from "./assets/delete.svg";
import { ReactComponent as BindIcon } from "./assets/bind.svg";
import { ReactComponent as ExchangeIcon } from "./assets/exchange.svg";
import { ReactComponent as AddIcon } from "./assets/add.svg";
import { ReactComponent as PlusCircleIcon } from "./assets/circle-plus.svg";
import { ReactComponent as PlusCircleBlueIcon } from "./assets/circle-plus-blue.svg";
import { ReactComponent as InfoModelBindTemplate } from "./assets/infomodel-bind-template.svg";
import { ReactComponent as InfoModelBindLemma } from "./assets/infomodel-bind-lemma.svg";
import { ReactComponent as InfoModelBindTag } from "./assets/infomodel-bind-tag.svg";
import { ReactComponent as CopyEditIcon } from "./assets/copy.svg";
import { ReactComponent as CutRedIcon } from "./assets/cut-red.svg";
import { ReactComponent as ShowIcon } from "./assets/show.svg";
import { ReactComponent as TreeIcon } from "./assets/tree.svg";
import { ReactComponent as AuthorizeIcon } from "./assets/authorize.svg";
import { ReactComponent as AcceptIcon } from "./assets/accept.svg";
import { ReactComponent as RefuseIcon } from "./assets/refuse.svg";
import { ReactComponent as DispatchIcon } from "./assets/dispatch.svg";
import { ReactComponent as AmplifierIcon } from "./assets/amplifier.svg";
import { ReactComponent as MoreIcon } from "./assets/more.svg";
import { ReactComponent as ExportIcon } from "./assets/export.svg";
import { ReactComponent as PreviousIcon } from "./assets/previous.svg";
import { ReactComponent as NextIcon } from "./assets/next.svg";
import { ReactComponent as AbortIcon } from "./assets/abort.svg";
import { ReactComponent as ScheduleIcon } from "./assets/schedule.svg";

import { Tooltip, TooltipProps } from "@gw/web-basic-components";

interface IIconProps {
  title?: ReactNode | (() => ReactNode);
  tooltipProps?: TooltipProps;
  [key: string]: any;
}
const iconHOC = (Component) => {
  return (props: IIconProps) => {
    const { title, tooltipProps, ...restProps } = props;
    return (
      <Tooltip title={title} placement="bottom" {...tooltipProps}>
        <Component {...restProps} />
      </Tooltip>
    );
  };
};

export default {
  EditIcon: iconHOC(EditIcon),
  DeleteIcon: iconHOC(DeleteIcon),
  BindIcon: iconHOC(BindIcon),
  ExchangeIcon: iconHOC(ExchangeIcon),
  AddIcon: iconHOC(AddIcon),
  PlusCircleIcon: iconHOC(PlusCircleIcon),
  InfoModelBindTemplate: iconHOC(InfoModelBindTemplate),
  InfoModelBindLemma: iconHOC(InfoModelBindLemma),
  InfoModelBindTag: iconHOC(InfoModelBindTag),
  CopyEditIcon: iconHOC(CopyEditIcon),
  PlusCircleBlueIcon: iconHOC(PlusCircleBlueIcon),
  CutRedIcon: iconHOC(CutRedIcon),
  ShowIcon: iconHOC(ShowIcon),
  TreeIcon: iconHOC(TreeIcon),
  AuthorizeIcon: iconHOC(AuthorizeIcon),
  AcceptIcon: iconHOC(AcceptIcon),
  RefuseIcon: iconHOC(RefuseIcon),
  DispatchIcon: iconHOC(DispatchIcon),
  AmplifierIcon: iconHOC(AmplifierIcon),
  MoreIcon: iconHOC(MoreIcon),
  ExportIcon: iconHOC(ExportIcon),
  PreviousIcon: iconHOC(PreviousIcon),
  NextIcon: iconHOC(NextIcon),
  AbortIcon: iconHOC(AbortIcon),
  ScheduleIcon: iconHOC(ScheduleIcon),
};
