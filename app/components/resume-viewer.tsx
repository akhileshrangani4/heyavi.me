'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export function ResumeViewer() {
  const [numPages, setNumPages] = useState<number>(0);

  return (
    <div className="w-full rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800">
      <Document
        file="/resume.pdf"
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={
          <div className="flex items-center justify-center py-20">
            <p className="text-sm text-neutral-400 dark:text-neutral-500">
              loading resume...
            </p>
          </div>
        }
      >
        {Array.from({ length: numPages }, (_, i) => (
          <Page
            key={i + 1}
            pageNumber={i + 1}
            width={640}
            className="mx-auto"
          />
        ))}
      </Document>
    </div>
  );
}
