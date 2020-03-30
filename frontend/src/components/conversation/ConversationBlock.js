import React from 'react';

import TextBubble from './TextBubble';
import { profilePicture } from '../user/User';

const ConversationBlock = ({ textBlock }) => {
  return (
    <div style={{ display: 'flex', paddingBottom: '3px', paddingTop: '2px' }}>
      <div
        style={{ display: 'flex', alignItems: 'flex-end', margin: '0 8px 1px' }}
      >
        {profilePicture}
      </div>
      <div style={{ lineHeight: '20px' }}>
        {textBlock.map((text, index) => {
          const radius =
            textBlock.length === 1
              ? '18px'
              : index === 0
              ? '18px 18px 18px 4px'
              : index === textBlock.length - 1
              ? '4px 18px 18px 18px'
              : '4px 18px 18px 4px';
          return <TextBubble key={index} text={text} radius={radius} />;
        })}
      </div>
    </div>
  );
};

export default ConversationBlock;
