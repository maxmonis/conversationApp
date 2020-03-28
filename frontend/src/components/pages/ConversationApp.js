import React, { useState } from 'react';

import ChatForm from '../chat/ChatForm';
import Conversation from '../conversation/Conversation';

const ConversationApp = () => {
  const [conversation, setConversation] = useState([]);
  const [text, setText] = useState('');
  const handleChange = e => {
    setText(e.target.value);
  };
  const handleSubmit = () => {
    setConversation([...conversation, text]);
  };
  return (
    <div>
      <ChatForm
        text={text}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Conversation conversation={conversation} />
    </div>
  );
};

export default ConversationApp;
