import React from 'react';
import TextInput from './TextInput';
import SubmitButton from './SubmitButton';

const ChatForm = ({ text, handleChange, handleSubmit }) => {
  return (
    <div
      style={{
        backgroundColor: 'black',
        display: 'flex',
        flex: 'row',
        height: '53px',
        borderRadius: '0 0 8px 8px'
      }}
    >
      <TextInput text={text} handleChange={handleChange} />
      <SubmitButton handleSubmit={handleSubmit} />
    </div>
  );
};

export default ChatForm;
