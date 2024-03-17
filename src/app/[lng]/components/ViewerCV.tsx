'use client';
import React, { useEffect } from 'react';
import { pdfjs } from 'react-pdf';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import useChangeSizeBrowser from './cardproject/useChangeSizeBrowser';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function ViewerCV({ tCV }: any) {
  const [numPages, setNumPages] = useState<number>();
  const [page, setPage] = useState();
  const [width, setWidth] = useState<number>();
  const { sizeBrowser } = useChangeSizeBrowser();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setPage(page);
  }
  useEffect(() => {
    const parentDiv = document.querySelector('#pdfDocument');
    if (parentDiv) {
      const widthToRemove = sizeBrowser.width - parentDiv.clientWidth;
      setWidth(sizeBrowser.width - widthToRemove);
    }
  }, [sizeBrowser]);

  return (
    <div className="w-full" id="pdfDocument">
      <Document
        file={tCV}
        onLoadSuccess={onDocumentLoadSuccess}
        className="flex w-full flex-wrap justify-center mt-6 mb-3"
      >
        {new Array(numPages).fill('').map((_, index) => (
          <Page key={index} width={width} pageNumber={index + 1} scale={1} />
        ))}
      </Document>
    </div>
  );
}
