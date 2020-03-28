import React from 'react';

const TextInput = ({ text, handleChange }) => {
  return (
    <div>
      <input value={text} onChange={handleChange} />
    </div>
  );
};

export default TextInput;
