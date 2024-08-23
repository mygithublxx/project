import React, {
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import { Modal } from "@gw/web-basic-components";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `/static/lib/pdf.worker-2.12.313.min.js`;
const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};
const maxWidth = 1200;

export type PDFFile = string | File | null;

interface IProps {
  pdf: { url: PDFFile; title: string };
}

const PdfView = (
  { pdf }: IProps,
  ref: ForwardedRef<{ openModal: () => void }>
) => {
  const [open, setOpen] = useState(false);
  const [pagesTotal, setNumPages] = useState([]);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(new Array(numPages).fill(0));
  };
  useImperativeHandle(ref, () => {
    return {
      openModal: () => setOpen(true),
    };
  });

  return (
    <Modal
      open={open}
      width={maxWidth}
      title={pdf?.title}
      onCancel={() => setOpen(false)}
    >
      <Document
        file={pdf?.url}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
      >
        {pagesTotal?.map((_, i: number) => {
          return (
            <Page
              key={i}
              width={maxWidth}
              pageNumber={i + 1}
              numPages={pagesTotal}
            ></Page>
          );
        })}
      </Document>
    </Modal>
  );
};

export default forwardRef(PdfView);
