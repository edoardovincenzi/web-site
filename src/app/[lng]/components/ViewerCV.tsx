'use client';
import React from 'react';
import { pdfjs } from 'react-pdf';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function ViewerCV({ tCV }: any) {
  const [numPages, setNumPages] = useState<number>();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={tCV}
        onLoadSuccess={onDocumentLoadSuccess}
        className="flex w-full flex-wrap justify-center mt-6 mb-3"
      >
        {new Array(numPages).fill('').map((_, index) => (
          <Page key={index} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
}
