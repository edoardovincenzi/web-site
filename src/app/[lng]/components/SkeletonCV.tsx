import React from 'react';

const SkeletonCV = () => {
  return (
    <div
      style={{
        backgroundColor: '#eee',
        background:
          'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
        borderRadius: '5px',
        backgroundSize: '200% 100%',
        animation: '1.5s shine linear infinite',
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '0',
      }}
    ></div>
  );
};

export default SkeletonCV;
