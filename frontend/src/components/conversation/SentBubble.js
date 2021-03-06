import React from 'react';

const SentBubble = ({ text, radius }) => {
  return (
    <div
      style={{
        width: 'auto',
        display: 'flex',
        flexDirection: 'row',
        color: 'rgb(228, 230, 235)'
      }}
    >
      <div
        style={{
          width: '87px',
          paddingLeft: '5px',
          paddingRight: '5px'
        }}
      />
      <p
        style={{
          borderRadius: radius,
          fontSize: '15px',
          padding: '7px 12px 8px',
          margin: '2px',
          backgroundColor: 'rgb(0, 132, 255)',
          overflowWrap: 'break-word',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          textAlign: 'start'
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default SentBubble;
