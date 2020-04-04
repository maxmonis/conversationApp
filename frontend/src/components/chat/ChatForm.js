import React from 'react';
import TextInput from './TextInput';
import SubmitButton from './SubmitButton';

import './ChatForm.css';

const ChatForm = ({ text, handleChange, handleSubmit }) => {
  return (
    <div
      className="chat-form"
    >
      <TextInput text={text} handleChange={handleChange} />
      <SubmitButton handleSubmit={handleSubmit} />
    </div>
  );
};

export default ChatForm;
