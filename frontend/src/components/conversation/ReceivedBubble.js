import React from 'react';

const ReceivedBubble = ({ text, radius }) => {
  return (
    <div
      style={{
        width: 'auto',
        display: 'flex',
        flexDirection: 'row',
        color: 'rgb(228, 230, 235)'
      }}
    >
      <p
        style={{
          borderRadius: radius,
          fontSize: '15px',
          padding: '7px 12px 8px',
          margin: '2px',
          backgroundColor: 'rgb(62, 64, 66)',
          overflowWrap: 'break-word',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word'
        }}
      >
        {text}
      </p>
      <div style={{ width: '77px', paddingLeft: '5px' }}></div>
    </div>
  );
};

export default ReceivedBubble;
