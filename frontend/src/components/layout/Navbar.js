import React from 'react';

import User from '../user/User';

const Navbar = () => {
  return (
    <div style={{ backgroundColor: 'green', display: 'flex', flex: 'row' }}>
      <User />
    </div>
  );
};

export default Navbar;
