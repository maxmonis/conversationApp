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
    text && setConversation([...conversation, text]);
    setText('');
  };
  return (
    <div>
      <Conversation conversation={conversation} />
      <ChatForm
        text={text}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default ConversationApp;
