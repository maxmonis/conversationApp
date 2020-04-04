import React from 'react';

import SentBlock from './SentBlock';
import ReceivedBlock from './ReceivedBlock';

const ConversationBlock = ({ textBlock }) => {
  const { type, texts } = textBlock;
  return (
    <div style={{ padding: '0 12px 8px' }}>
      {type === 'received' ? (
        <ReceivedBlock texts={texts} />
      ) : (
        <SentBlock texts={texts} />
      )}
    </div>
  );
};

export default ConversationBlock;
