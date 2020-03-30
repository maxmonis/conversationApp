import React from 'react';

import ConversationBlock from './ConversationBlock';
import sortMessages from '../../functions/sortMessages';

const Conversation = ({ conversation }) => {
  const textBlocks = sortMessages(conversation);
  return (
    <div style={{ backgroundColor: 'black', height: '300px' }}>
      {textBlocks.map((textBlock, index) => (
        <ConversationBlock textBlock={textBlock} key={index} />
      ))}
    </div>
  );
};

export default Conversation;
