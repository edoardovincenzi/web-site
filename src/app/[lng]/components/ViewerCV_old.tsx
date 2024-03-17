import React from 'react';

export default function ViewerCV_old({ tCV }: any) {
  return (
    <div className="w-full flex justify-center h-[2700px] my-3">
      <div className="bg-[#f2f2f2] flex justify-center w-full h-full my-3 pb-0 shadow-[0 2px 8px 0 rgba(63,69,81,0.16)] overflow-hidden rounded-lg will-change-auto">
        <iframe
          id="cv_pdf"
          loading="lazy"
          className="w-[600pt]"
          src={tCV(
            'link_view',
            'https://www.canva.com/design/DAFjjXFviyU/view?embed'
          )}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
