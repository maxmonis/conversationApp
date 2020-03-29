/**
 * Save a new chat to a conversations
 */
const addToConversation = (req, res) => {
  const chat = req.body.chat;
  console.log(`User says ${chat}`);
  res.send('OK');
}

export {
  addToConversation,
}