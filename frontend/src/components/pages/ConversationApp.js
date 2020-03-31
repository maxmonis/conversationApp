import React, { useState } from 'react';

import ChatForm from '../chat/ChatForm';
import Conversation from '../conversation/Conversation';

const ConversationApp = () => {
  const [conversation, setConversation] = useState([
    { user: 'Kendrick', text: 'Received message' },
    {
      user: 'Kendrick',
      text:
        'Second received message, which is longer so as to demonstrate how long messages are rendered'
    },
    { user: 'me', text: 'Sent message, also for testing purposes' },
    {
      user: 'Kendrick',
      text: 'An additional message, the third thus far and medium length'
    },
    {
      user: 'me',
      text: 'Second sent message, also for testing purposes'
    },
    { user: 'Kendrick', text: 'Fourth' }
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
