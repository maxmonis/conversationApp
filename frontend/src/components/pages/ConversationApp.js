import React, { useState, useEffect } from 'react';

import ChatForm from '../chat/ChatForm';
import Conversation from '../conversation/Conversation';

import fetchConversation from '../../utils/fetchConversation';

const ConversationApp = () => {
  
  // Start with no conversation
  const [conversation, setConversation] = useState({
    _id: "5e80d69979c89112f4c914e7",
    messages: [{
        _id: "5e80d69979c89112f4c914e8",
        user: {
            _id: "5e80d69979c89112f4c914e9",
            name: "Test Testerson",
            profilePicture: "https://www.thesprucepets.com/thmb/iUPr_d3DJ78DFE_7q6FcPxeGaHU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/twenty20_d2b57e80-6815-4c83-9ea6-0e1438e9b79f-5ac3b27deb97de0037092d49.jpg",
            status: "ACTIVE"
        },
        body: "HI"
    }]
  });

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
        { conversation && <Conversation conversation={conversation} /> }
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
