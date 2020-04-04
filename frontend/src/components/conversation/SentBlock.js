import React from 'react';

import SentBubble from './SentBubble';

const SentBlock = ({ texts }) => {
  return (
    <div
      style={{
        display: 'flex',
        padding: '2px 0 3px'
      }}
    >
      <div style={{ lineHeight: '20px' }}>
        {texts.map((text, index) => {
          const radius =
            texts.length === 1
              ? '18px'
              : index === 0
              ? '18px 18px 4px 18px'
              : index === texts.length - 1
              ? '18px 4px 18px 18px'
              : '18px 4px 4px 18px';
          return <SentBubble key={index} text={text} radius={radius} />;
        })}
      </div>
    </div>
  );
};

export default SentBlock;
