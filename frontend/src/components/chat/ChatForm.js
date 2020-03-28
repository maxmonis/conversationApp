import React from 'react';
import TextInput from './TextInput';
import SubmitButton from './SubmitButton';

const ChatForm = ({ text, handleChange, handleSubmit }) => {
  return (
    <div style={{ backgroundColor: 'red', display: 'flex', flex: 'row' }}>
      <TextInput text={text} handleChange={handleChange} />
      <SubmitButton handleSubmit={handleSubmit} />
    </div>
  );
};

export default ChatForm;
