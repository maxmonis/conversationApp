import React from 'react';

import User from '../user/User';

const Navbar = () => {
  return (
    <div style={{ backgroundColor: 'black', display: 'flex', flex: 'row', color: 'white', padding: '8px', height: '48px', boxSizing: 'border-box' }}>
      <User />
    </div>
  );
};

export default Navbar;
