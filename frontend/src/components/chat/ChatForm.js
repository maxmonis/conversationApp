import React from 'react';
import TextInput from './TextInput';
import SubmitButton from './SubmitButton';

const ChatForm = ({ text, handleChange, handleSubmit }) => {
  return (
    <div>
      <TextInput text={text} handleChange={handleChange} />
      <SubmitButton handleSubmit={handleSubmit} />
    </div>
  );
};

export default ChatForm;
