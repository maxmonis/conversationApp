import React from 'react';

const AppLayout = (props) => {
  return (
    <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', fontFamily: 'monospace' }}>
      <div style={{ minWidth: '360px' }}>
        { props.children }
      </div>
    </div>
  );
};

export default AppLayout;
