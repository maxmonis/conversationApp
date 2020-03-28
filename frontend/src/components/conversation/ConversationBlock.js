import React from 'react';

import TextBubble from './TextBubble';
import UserView from './UserView';

const ConversationBlock = ({ statement }) => {
  return (
    <div>
      <UserView />
      <TextBubble statement={statement} />
    </div>
  );
};

export default ConversationBlock;
