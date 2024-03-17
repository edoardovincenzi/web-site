import { useEffect, useState } from 'react';

const useChangeSizeBrowser = () => {
  const [sizeBrowser, setSizeBrowser] = useState<{
    width: number;
    height: number;
  }>({ width: 300, height: 500 });

  useEffect(() => {
    const resizeEvent = (e: any) => {
      const { outerWidth, outerHeight } = e.currentTarget;
      setSizeBrowser({ width: outerWidth, height: outerHeight });
    };
    onresize = resizeEvent;
    return () => {
      removeEventListener('resize', resizeEvent);
    };
  }, []);

  return { sizeBrowser };
};

export default useChangeSizeBrowser;
