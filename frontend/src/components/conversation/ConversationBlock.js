import React from 'react';

import TextBubble from './TextBubble';
import { profilePicture } from '../user/User';

const ConversationBlock = ({ statement }) => {
  return (
    <div style={{ display: 'flex', flex: 'row' }}>
      {profilePicture} <TextBubble statement={statement} />
    </div>
  );
};

export default ConversationBlock;
