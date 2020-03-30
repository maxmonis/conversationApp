import React from 'react';

const AppLayout = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'monospace'
      }}
    >
      <div
        style={{
          minWidth: '360px',
          borderRadius: '8px',
          border: '1px solid transparent',
          overflow: 'hidden',
          height: '455px'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
