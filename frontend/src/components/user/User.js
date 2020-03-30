import React from 'react';

const user = {
  id: 1,
  name: 'Monis',
  status: 'online',
  photo:
    'https://www.eventim.nl/obj/media/NL-eventim/galery/222x222/k/kendrick-lamar-v3.jpg'
};
const User = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={user.photo}
        alt='Profile Photo'
        style={{ height: '32px', borderRadius: '50%', marginRight: '8px' }}
      />{' '}
      <div>
        <div style={{ fontSize: '15px', fontWeight: 500, lineHeight: '1.25em' }}>{user.name}</div> 
        <div style={{ fontSize: '12px', fontWeight: 500, lineHeight: '1.25em' }}>{user.status}</div>
      </div>
    </div>
  );
};

export const profilePicture = (
  <img
    src={user.photo}
    alt='Profile Photo'
    style={{ height: '28px', borderRadius: '50%' }}
  />
);
export default User;
