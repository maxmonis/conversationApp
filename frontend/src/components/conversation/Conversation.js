import React from 'react';

import ConversationBlock from './ConversationBlock';

const Conversation = ({ conversation }) => {
  return (
    <div style={{ backgroundColor: 'blue', minHeight: '100px' }}>
      {conversation.map((statement, index) => (
        <ConversationBlock key={`${statement}${index}`} statement={statement} />
      ))}
    </div>
  );
};

export default Conversation;
