import React, { useEffect, useRef } from 'react';

import ConversationBlock from './ConversationBlock';
import sortMessages from '../../functions/sortMessages';

import './Conversation.css';

const Conversation = ({ messages }) => {
  const textBlocks = messages ? sortMessages(messages) : null;
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  return (
    <div className='conversation'>
      {textBlocks && (
        <div>
          {textBlocks.map((textBlock, index) => (
            <ConversationBlock textBlock={textBlock} key={index} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      )}
    </div>
  );
};

export default Conversation;
