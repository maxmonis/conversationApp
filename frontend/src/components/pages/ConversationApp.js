import React, { useState, useEffect } from 'react';

import ChatForm from '../chat/ChatForm';
import Conversation from '../conversation/Conversation';

import fetchConversation from '../../functions/fetchConversation';
import sendConversationMessage from '../../functions/sendConversationMessage';

const ConversationApp = () => {
  // Start with no conversation
  const [conversation, setConversation] = useState(null);

  /**
   * Fetch the conversation from the server
   */
  useEffect(() => {
    fetchConversation()
      .then((retrievedConversation) => {
        if (!retrievedConversation) {
          // Display an error message. We couldn't fetch the conversation :(
        } else {
          setConversation(retrievedConversation);
        }
      })
      .catch(console.log('Failed to fetch conversation in ConversationApp'));
  }, []);

  const [messages, updateMessages] = useState([]);
  useEffect(() => {
    conversation && updateMessages([...conversation.messages]);
  }, [conversation]);

  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async () => {
    if (!text) return;
    const savedMessage = await sendConversationMessage(text);
    if (savedMessage) {
      updateMessages([...messages, savedMessage]);
      setText('');
    } else {
      // Display that the message did not send!
    }
  };

  return (
    <div style={{ fontSize: '15px' }}>
      <div
        style={{
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Conversation key={messages.length} messages={messages} />
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
