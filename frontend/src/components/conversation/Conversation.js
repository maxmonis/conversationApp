import React, { useEffect, useRef } from 'react';

import ConversationBlock from './ConversationBlock';
import sortMessages from '../../functions/sortMessages';

const Conversation = ({ messages }) => {
  console.log(messages);
  const textBlocks = sortMessages(messages);
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
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
