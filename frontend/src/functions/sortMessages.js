export default messages => {
  const sent = [];
  const received = [];
  const textBlocks = [];
  for (const message of messages) {
    if (message.user === 'me') {
      received.length && textBlocks.push({ type: 'received', texts: received });
      sent.push(message);
    } else {
      sent.length && textBlocks.push({ type: 'sent', texts: sent });
      received.push(message);
    }
  }
  sent.length && textBlocks.push({ type: 'sent', texts: sent });
  received.length && textBlocks.push({ type: 'received', texts: received });
  return textBlocks;
};
