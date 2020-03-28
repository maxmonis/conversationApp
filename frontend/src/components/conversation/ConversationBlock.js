import React from 'react';

import TextBubble from './TextBubble';
import { profilePicture } from '../user/User';

const ConversationBlock = ({ textBlock }) => {
  return (
    <div style={{ display: 'flex', height: '30px' }}>
      {textBlock.map((text, index) => {
        return index < textBlock.length - 1 ? (
          <TextBubble key={(text, index)} text={text} />
        ) : (
          <div key={(text, index)} style={{ display: 'flex', flex: 'row' }}>
            {profilePicture}
            <TextBubble text={text} />
          </div>
        );
      })}
    </div>
  );
};

export default ConversationBlock;
