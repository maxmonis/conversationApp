import React, { useState } from 'react';
import ChatForm from '../chat/ChatForm';

const ConversationApp = () => {
  const [text, setText] = useState('');
  const handleChange = e => {
    setText(e.target.value);
  };
  const handleSubmit = e => {
    console.log(text);
  };
  return (
    <div>
      <ChatForm
        text={text}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default ConversationApp;
