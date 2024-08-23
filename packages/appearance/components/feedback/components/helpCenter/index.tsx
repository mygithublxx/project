import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { groupBy } from "lodash";
import { Dropdown, Spin } from "@gw/web-basic-components";
import { PdfView } from "..";
import { useRequest, apis } from "../../../../../appearance/utils";
import type { HelpCenterProps } from "./dto";

import { ReactComponent as FeedbackSvg } from "../../../../assets/icon_feedback.svg";
import folder from "../../../../assets/feedback/folder.png";
import pdfUrl from "../../../../assets/feedback/pdf.svg";

const Item = (props: any) => {
  const [curPDf, setCurPDF] = useState<{ url: any; title: string }>(null);
  const pdfRef = useRef<{ openModal: () => void }>();
  return (
    <>
      <div className="folder">
        <img src={folder} />
        <div className="item-title">{props.materialType}</div>
      </div>
      <PdfView ref={pdfRef} pdf={curPDf} />
      {props.pdfs.map((pdf) => {
        return (
          <>
            <div className="pdf">
              <img src={pdfUrl} />
              <div className="item-header" title={pdf.name}>
                {pdf.name}
              </div>
            </div>
            <div className="opt">
              <div
                className="item-opt"
                onClick={() => {
                  window.open(pdf.url, "_blank");
                }}
              >
                下载
              </div>
              <div className="split" />
              <div
                className="item-opt"
                onClick={() => {
                  setCurPDF({ url: pdf.url, title: pdf.name });
                  pdfRef.current.openModal();
                }}
              >
                预览
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

const FileItem = ({ productType, fileData, className }: any) => {
  const data = groupBy(fileData, "materialType");
  const filesKeys = useMemo(() => {
    return data ? Object.keys(data) : [];
  }, [fileData]);

  return (
    <div className={className}>
      <label className="label">{productType}</label>
      <div className="item-container">
        {filesKeys.map((key) => {
          return (
            <div className="item" key={key}>
              <Item materialType={key} pdfs={data[key]} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const InnerDropdown = ({
  dataList,
  appCode,
  loading,
  onOpenFeedBackModal,
}: any) => {
  const [files, setFiles] = useState<{ [key: string]: any[] }>();

  const filesKeys = useMemo(() => {
    return files ? Object.keys(files) : [];
  }, [files]);

  useEffect(() => {
    setFiles(groupBy(dataList, "productType"));
  }, [dataList]);

  return (
    <div className={"wbuc-file-dropdown"} data-app-theme={appCode}>
      <Spin spinning={loading}>
        {Boolean(filesKeys.length) && (
          <div className="file center">
            文档中心
            <div
              className={classNames(
                "file-container",
                filesKeys.length <= 3 ? "min-width" : "max-width"
              )}
            >
              {files &&
                (filesKeys.length <= 3 ? (
                  <>
                    {filesKeys.map((fileKey) => {
                      return (
                        <FileItem
                          key={fileKey}
                          productType={fileKey}
                          fileData={files[fileKey]}
                        />
                      );
                    })}
                  </>
                ) : (
                  <div className="item-content">
                    {filesKeys.map((fileKey, index) => {
                      return (
                        <>
                          <FileItem
                            key={fileKey}
                            className={"item-double"}
                            productType={fileKey}
                            fileData={files[fileKey]}
                          />
                          {Boolean(index % 2 === 0) && (
                            <div className="split" />
                          )}
                        </>
                      );
                    })}
                  </div>
                ))}
            </div>
          </div>
        )}
        <div className="file" onClick={onOpenFeedBackModal}>
          反馈建议
        </div>
      </Spin>
    </div>
  );
};

/**
 * 帮助中心
 */
const HelpCenter = (props: HelpCenterProps) => {
  const { isI18N, onOpenFeedBackModal } = props;
  const [files, setFiles] = useState(null);
  const [{ loading }, fetchPermission] = useRequest<any, any>(
    apis.document.getDocuments
  );
  const { t } = useTranslation();
  return (
    <Dropdown
      overlayClassName={"wbuc-file-dropdown"}
      trigger={["hover"]}
      onOpenChange={(openFlag) => {
        if (openFlag) {
          fetchPermission({ size: -1 }).then((res) => {
            const { dataList } = res;
            setFiles(dataList);
          });
        }
      }}
      dropdownRender={() =>
        (
          <InnerDropdown
            loading={loading}
            dataList={files}
            appCode={props.themeCode || props.app}
            onOpenFeedBackModal={onOpenFeedBackModal}
          />
        ) as React.ReactNode
      }
    >
      <div className={"wbuc-feedback-trigger"}>
        <FeedbackSvg />
        {isI18N ? t("feedback_suggestions") : "帮助"}
      </div>
    </Dropdown>
  );
};

export default HelpCenter;
