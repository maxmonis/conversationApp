import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import { getConversation } from '../../actions/conversationActions';

import ChatForm from '../chat/ChatForm';
import Conversation from '../conversation/Conversation';

import sendConversationMessage from '../../functions/sendConversationMessage';

const ConversationApp = ({
  conversation: { conversation, loading },
  getConversation,
}) => {
  useEffect(() => {
    getConversation();
    // eslint-disable-next-line
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

  return loading ? (
    <h1>Loading...</h1>
  ) : (
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

const mapStateToProps = (state) => ({ conversation: state.conversation });

export default connect(mapStateToProps, { getConversation })(ConversationApp);
