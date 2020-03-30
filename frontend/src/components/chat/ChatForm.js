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
        float: 'right'
      }}
    >
      <TextInput text={text} handleChange={handleChange} />
      <SubmitButton handleSubmit={handleSubmit} />
    </div>
  );
};

export default ChatForm;
