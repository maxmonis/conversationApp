import React from 'react';

import ConversationBlock from './ConversationBlock';
import sortMessages from '../../functions/sortMessages';

const Conversation = ({ conversation }) => {
  const textBlock = sortMessages(conversation);
  return (
    <div style={{ backgroundColor: 'black', height: '300px' }}>
      <ConversationBlock textBlock={conversation} />
    </div>
  );
};

export default Conversation;
