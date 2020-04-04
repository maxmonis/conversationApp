import React, { useState } from 'react';

import ChatForm from '../chat/ChatForm';
import Conversation from '../conversation/Conversation';

const ConversationApp = () => {
  const [conversation, setConversation] = useState([
    { user: 'me', text: 'One' },
    { user: 'me', text: 'Two' },
    { user: 'me', text: 'Three' },
    {
      user: 'Kendrick',
      text: 'A received message'
    },
    {
      user: 'me',
      text:
        'A longer message designed to demonstrate how long ones are rendered'
    }
  ]);
  const [text, setText] = useState('');
  const handleChange = e => {
    setText(e.target.value);
  };
  const handleSubmit = () => {
    text && setConversation([...conversation, { user: 'me', text: text }]);
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
