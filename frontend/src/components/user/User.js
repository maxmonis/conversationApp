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
    <div>
      <img
        src={user.photo}
        alt='Kendrick'
        style={{ height: '25px', borderRadius: '50%' }}
      />{' '}
      {user.name} {user.status}
    </div>
  );
};

export const profilePicture = (
  <img
    src={user.photo}
    alt='Kendrick'
    style={{ height: '25px', borderRadius: '50%' }}
  />
);
export default User;
