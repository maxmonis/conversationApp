import React from 'react';

import ConversationBlock from './ConversationBlock';

const Conversation = ({ conversation }) => {
  return (
    <div>
      {conversation.map(statement => (
        <ConversationBlock key={statement} statement={statement} />
      ))}
    </div>
  );
};

export default Conversation;
