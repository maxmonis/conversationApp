import React from 'react';

const TextInput = ({ text, handleChange }) => {
  return (
    <div>
      <input
        value={text}
        onChange={handleChange}
        style={{
          backgroundColor: 'rgb(28, 30, 33)',
          border: 0,
          height: '48px',
          borderRadius: '18px',
          color: 'rgb(228, 230, 235)'
        }}
      />
    </div>
  );
};

export default TextInput;
