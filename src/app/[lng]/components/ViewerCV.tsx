import React from 'react';

const ViewerCV = () => {
  return (
    <div className="flex max-md:flex-col w-full h-[80%] xl:h-[70%] gap-3">
      <div className="bg-[#f2f2f2] relative w-full mt-3 h-0 pt-[141.4286%] pb-0 shadow-[0 2px 8px 0 rgba(63,69,81,0.16)] overflow-hidden rounded-lg will-change-auto">
        <iframe
          id="cv_pdf"
          loading="lazy"
          className="absolute w-full h-full top-0 left-0 p-0 m-0 border-none"
          src="https://www.canva.com/design/DAFL1aIpLqc/view?embed"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ViewerCV;
