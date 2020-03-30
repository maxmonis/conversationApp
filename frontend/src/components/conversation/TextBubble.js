import React from 'react';

const TextBubble = ({ text }) => {
  return (
    <li
      style={{
        backgroundColor: 'white',
        borderRadius: '5px',
        fontSize: '15px',
        padding: '5px 10px',
        width: 'auto'
      }}
    >
      {text}
    </li>
  );
};

export default TextBubble;
