export default messages => {
  let sent = [];
  let received = [];
  const textBlocks = [];
  for (const message of messages) {
    if (message.user === 'me') {
      received.length && textBlocks.push({ type: 'received', texts: received });
      received = [];
      sent.push(message);
    } else {
      sent.length && textBlocks.push({ type: 'sent', texts: sent });
      sent = [];
      received.push(message);
    }
  }
  sent.length && textBlocks.push({ type: 'sent', texts: sent });
  received.length && textBlocks.push({ type: 'received', texts: received });
  return textBlocks;
};
