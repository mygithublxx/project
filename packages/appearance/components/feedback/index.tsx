import React, { useMemo, useState } from "react";
import { LOCALSTORAGE_USERINFO } from "../../../appearance/constant";
import {
  Checkbox,
  Confirm,
  Form,
  Input,
  Modal,
  Upload,
  UploadFile,
  message,
  UploadProps,
} from "@gw/web-basic-components";
import { useTranslation } from "react-i18next";
import { useRequest, apis } from "../../../appearance/utils";
import HelpCenter from "./components/helpCenter";
import type { UserInfo } from "../../../localLogin/hooks/useLogin/dto";
import type { FeedbackProps } from "./dto";

import WechatPng from "../../assets/feedback/wechat.png";
import WechatBaobi from "../../assets/feedback/wechat_baobi.jpg";
import WarningSvg from "../../assets/confirm_warning.svg";
import { OdmCaseEnum, odmCaseFilter } from "../../../utils/odm-case";

const RESPONSE_OK = "00000";

/**
 * 反馈建议
 */
const Feedback = (props: FeedbackProps) => {
  const { isI18N } = props;
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [cancelVisible, setCancelVisible] = useState(false);
  /**
   * 用户信息
   */
  const [userInfo] = useState<UserInfo>(
    JSON.parse(localStorage.getItem(LOCALSTORAGE_USERINFO))
  );
  /**
   * 已上传的文件列表
   */
  const [fileList, setFileList] = useState<UploadFile<any>[]>([]);
  /**
   * 表单实体
   */
  const [form] = Form.useForm();
  /**
   * 提交反馈请求
   */
  const [{ loading }, fetchFeedback] = useRequest<any, any>(
    apis.feedback.platform
  );
  /**
   * 问题类型
   */
  const questionType = [
    { value: "3", name: isI18N ? t("data_problem") : "数据问题" },
    { value: "4", name: isI18N ? t("interactive_experience") : "交互体验" },
    { value: "9", name: isI18N ? t("other_questions") : "其它问题" },
  ];
  /**
   * 反馈建议点击回调
   */
  const handleModalOpen = () => {
    setOpen(true);
  };

  /**
   * 图片限制条件
   */
  const handleFile: UploadProps["beforeUpload"] = (file) => {
    // 图片大小判断
    const isLimitSize = file.size / 1024 / 1024 > 2;
    if (isLimitSize) {
      message.error(
        isI18N ? t("upload_image_size_tips") : "图片大小超过2M，请重新上传"
      );
      return Upload.LIST_IGNORE;
    } else {
      return true;
    }
  };

  /**
   * 处理图片数据列表
   */
  const handleFileList = (list: UploadFile<any>[]) => {
    const files = list?.map((item) => {
      if (item?.response && item?.response?.code !== RESPONSE_OK) {
        message.error(
          item?.response?.errorMsg || isI18N
            ? t("upload_errror_msg")
            : "上传出错"
        );
        return null;
      }
      return {
        ...item,
        percent: Math.round(item.percent),
      };
    });
    setFileList(files?.filter((m) => m));
  };

  /**
   * 验证反馈内容长度
   */
  const contentValidate = (rule, value, callback) => {
    if (value && value.length < 5) {
      callback(isI18N ? t("feedback_minlength_tips") : "反馈内容至少5个字符");
    }
    callback();
  };

  /**
   * 表单验证
   */
  const formValidate = () => {
    form.submit();
  };

  /**
   * Modal提交提示
   */
  const submitTips = () => {
    setConfirmVisible(true);
  };
  /**
   * Modal取消提示
   */
  const cancelTips = () => {
    if (form.isFieldsTouched()) {
      setCancelVisible(true);
    } else {
      setOpen(false);
      setFileList(void 0);
      form.resetFields();
    }
  };
  /**
   * Confirm确认提交
   */
  const onSubmit = () => {
    const type = form.getFieldValue("type");
    const content = form.getFieldValue("content");
    const phone = form.getFieldValue("phone");
    // 图片数据处理，取出图片的key
    const imgList = fileList?.map((item) => {
      if (item?.response?.code === RESPONSE_OK) {
        return item?.response?.data;
      } else {
        return null;
      }
    });
    const fileKeys = imgList?.filter((m) => m);
    fetchFeedback({
      browserResolution: `${window.screen.width}*${window.screen.height}`,
      content: content,
      contractInformation: phone,
      imageFileKeys: fileKeys,
      typeList: type,
    }).then(() => {
      message.success(isI18N ? t("successfully_submit") : "提交成功");
      setOpen(false);
      setFileList(void 0);
      form.resetFields();
    });
  };
  /**
   * Confirm确认取消
   */
  const onCancel = () => {
    setOpen(false);
    setFileList(void 0);
    form.resetFields();
  };

  /** FormItem Label 前面的mark */
  const labelIcon = useMemo(() => {
    return <div className="wbuc-form-label-icon" />;
  }, []);

  return (
    <>
      <HelpCenter app={props.app} onOpenFeedBackModal={handleModalOpen} />
      <Modal
        title={isI18N ? t("feedback_suggestions") : "反馈建议"}
        open={open}
        onCancel={cancelTips}
        okText={isI18N ? t("submit") : "提交"}
        onOk={formValidate}
        loading={loading}
        getContainer={props.container.current}
        className="wbuc-feedback-modal"
      >
        <div className="wbuc-form-wrapper">
          <Form
            form={form}
            initialValues={{ phone: userInfo?.phone }}
            onFinish={submitTips}
            labelDecorationIcon={labelIcon}
          >
            <Form.Item
              label={isI18N ? t("question_category") : "问题分类"}
              name="type"
            >
              <Checkbox.Group>
                {questionType.map((m) => {
                  return (
                    <Checkbox value={m.value} key={m.value}>
                      {m.name}
                    </Checkbox>
                  );
                })}
              </Checkbox.Group>
            </Form.Item>
            <Form.Item
              label={isI18N ? t("feedback_content") : "反馈内容"}
              name="content"
              rules={[
                {
                  required: true,
                  message: isI18N
                    ? t("please_enter_feedback_content")
                    : "请输入反馈内容",
                },
                {
                  validator: contentValidate,
                },
              ]}
            >
              <Input.Textarea
                placeholder={
                  isI18N
                    ? t("feedback_tips")
                    : "请填写具体内容帮助我们了解您的意见和建议，您的宝贵建议也将更好的优化您的使用体验"
                }
                autoSize={{ minRows: 8, maxRows: 8 }}
                showCount
                maxLength={500}
              />
            </Form.Item>
            <Form.Item
              label={isI18N ? t("contact_information") : "联系方式"}
              name="phone"
              rules={[
                {
                  required: true,
                  message: isI18N
                    ? t("please_enter_contact_information")
                    : "请输入联系方式",
                },
                {
                  pattern: /^\d+$/,
                  message: isI18N
                    ? t("please_enter_correct_contact_information")
                    : "请输入正确的联系方式",
                },
              ]}
            >
              <Input
                placeholder={
                  isI18N
                    ? t("contact_tips")
                    : "方便我们答疑解惑，您的联系方式仅供我司工作人员查看"
                }
              />
            </Form.Item>
            <Form.Item
              label={isI18N ? t("upload_image") : "上传图片"}
              name="upload"
            >
              <div className="wbuc-upload-wrapper">
                <span className="wbuc-upload-tips">
                  {`${
                    isI18N ? t("support_extension") : "支持扩展名"
                  }： jpg, jpeg, png, gif`}
                </span>
                <span className="wbuc-upload-tips">
                  {isI18N
                    ? t("upload_tips")
                    : "最多可以上传5张图片，每张图片大小不能超过2M"}
                </span>
                <Upload
                  className="wbuc-upload"
                  listType="picture-card"
                  maxCount={5}
                  accept=".jpg,.jpeg,.png,.gif"
                  action="/api/manager/userFeedbacks/images"
                  headers={{
                    "access-token": localStorage.getItem("accesstoken") || "",
                  }}
                  data={{ channel: "WE-Platform" }}
                  beforeUpload={handleFile}
                  fileList={fileList}
                  onChange={(info) => handleFileList(info?.fileList)}
                  description={isI18N ? t("upload_image") : "上传图片"}
                >
                  {fileList?.length >= 5 ? null : undefined}
                </Upload>
              </div>
            </Form.Item>
            <Form.Item
              label={isI18N ? t("scan_wechat_tips") : "扫一扫添加客服微信"}
              name="wechat"
            >
              <img
                alt=""
                src={odmCaseFilter(
                  {
                    [OdmCaseEnum.Goodwe]: WechatPng,
                    [OdmCaseEnum.Baobi]: WechatBaobi,
                  },
                  WechatPng
                )}
                className="wbuc-wechat"
              />
            </Form.Item>
          </Form>
        </div>
      </Modal>
      <Confirm
        open={confirmVisible}
        icon={WarningSvg}
        title={
          isI18N ? t("submit_confirm_msg") : "是否确定提交？一旦提交无法修改"
        }
        okText={isI18N ? t("besure") : "确认"}
        cancelText={isI18N ? t("cancel") : "取消"}
        onClose={() => {
          setConfirmVisible(false);
        }}
        onOk={onSubmit}
      />
      <Confirm
        open={cancelVisible}
        icon={WarningSvg}
        title={
          isI18N ? t("cancel_confirm_msg") : "是否确定取消？一旦取消需重新编辑"
        }
        onClose={() => {
          setCancelVisible(false);
        }}
        getContainer={props.container.current}
        okText={isI18N ? t("besure") : "确认"}
        cancelText={isI18N ? t("cancel") : "取消"}
        onOk={onCancel}
        className="wbuc-feedback-modal"
      />
    </>
  );
};

export default Feedback;
