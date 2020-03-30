import React, { useState } from 'react';

import ChatForm from '../chat/ChatForm';
import Conversation from '../conversation/Conversation';

const ConversationApp = () => {
  const [conversation, setConversation] = useState([
    'Test message',
    'Second message',
    'Third message, also for testing purposes'
  ]);
  const [text, setText] = useState('');
  const handleChange = e => {
    setText(e.target.value);
  };
  const handleSubmit = () => {
    text && setConversation([...conversation, text]);
    setText('');
  };
  return (
    <div style={{ fontSize: '15px' }}>
      <div
        style={{
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Conversation conversation={conversation} />
        <ChatForm
          text={text}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default ConversationApp;
