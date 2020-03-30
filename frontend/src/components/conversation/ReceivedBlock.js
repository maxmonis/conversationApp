import React from 'react';

import ReceivedBubble from './ReceivedBubble';
import { profilePicture } from '../user/User';

const ReceivedBlock = ({ texts }) => {
  return (
    <div style={{ display: 'flex', paddingBottom: '3px', paddingTop: '2px' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          margin: '0 8px 1px'
        }}
      >
        {profilePicture}
      </div>
      <div style={{ lineHeight: '20px' }}>
        {texts.map((text, index) => {
          const radius =
            texts.length === 1
              ? '18px'
              : index === 0
              ? '18px 18px 18px 4px'
              : index === texts.length - 1
              ? '4px 18px 18px 18px'
              : '4px 18px 18px 4px';
          return <ReceivedBubble key={index} text={text} radius={radius} />;
        })}
      </div>
    </div>
  );
};

export default ReceivedBlock;
