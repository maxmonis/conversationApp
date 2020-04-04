import React, { useState, useEffect } from 'react';

import ChatForm from '../chat/ChatForm';
import Conversation from '../conversation/Conversation';

import fetchConversation from '../../functions/fetchConversation';
import sendConversationMessage from '../../functions/sendConversationMessage';

const ConversationApp = () => {
  
  // Start with no conversation
  const [conversation, setConversation] = useState({});

  /**
   * Fetch the conversation from the server
   */
  useEffect(() => {
    fetchConversation().then((conversation) => {
      if (!conversation) {
        // Display an error message. We couldn't fetch the conversation :(
      } else {
        setConversation(conversation);
      }
    });
  }, []);

  const [messages, updateMessages] = useState(null);
  useEffect(() => {
    updateMessages(conversation.messages);
  }, [conversation])

  const [text, setText] = useState('');
  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = async () => {
    const savedMessage = text ? await sendConversationMessage(text) : null;
    if (savedMessage) {
      updateMessages([...messages, savedMessage]);
    } else {
      // Display that the message did not send!
    }
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
        { messages && <Conversation messages={messages} /> }
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
