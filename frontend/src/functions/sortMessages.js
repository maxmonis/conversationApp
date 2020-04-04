export default messages => {
  let sent = [];
  let received = [];
  const textBlocks = [];
  for (const message of messages) {
    if (message.user === 'me') {
      if (received.length > 0) {
        textBlocks.push({ type: 'received', texts: received });
        received = [];
      }
      sent.push(message.text);
    } else {
      if (sent.length > 0) {
        textBlocks.push({ type: 'sent', texts: sent });
        sent = [];
      }
      received.push(message.text);
    }
  }
  sent.length && textBlocks.push({ type: 'sent', texts: sent });
  received.length && textBlocks.push({ type: 'received', texts: received });
  return textBlocks;
};
