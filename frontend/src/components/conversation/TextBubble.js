import React from 'react';

const TextBubble = ({ text }) => {
  return (
    <div style={{ width: 'auto' }}>
      <p
        style={{
          backgroundColor: 'white',
          borderRadius: '5px',
          fontSize: '15px',
          padding: '5px 10px'
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default TextBubble;
