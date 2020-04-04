import React, { useEffect, useRef } from 'react';

import ConversationBlock from './ConversationBlock';
import sortMessages from '../../functions/sortMessages';

const Conversation = ({ conversation }) => {
  const textBlocks = sortMessages(conversation);
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [conversation]);
  return (
    <div
      style={{
        backgroundColor: 'black',
        height: '300px',
        overflow: 'scroll'
      }}
    >
      {textBlocks.map((textBlock, index) => (
        <ConversationBlock textBlock={textBlock} key={index} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Conversation;
