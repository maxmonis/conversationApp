import React from 'react';

import SentBlock from './SentBlock';
import ReceivedBlock from './ReceivedBlock';

const ConversationBlock = ({ textBlock }) => {
  const { type, texts } = textBlock;
  console.log(textBlock);
  return type === 'received' ? (
    <ReceivedBlock texts={texts} />
  ) : (
    <SentBlock texts={texts} />
  );
};

export default ConversationBlock;
