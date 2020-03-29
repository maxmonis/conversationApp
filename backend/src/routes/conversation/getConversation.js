import { exampleConversation } from '../../models/conversation';

/**
 * Retrieve all conversations for the current user
 */
const getConversation = (req, res) => {
  res.send(exampleConversation);
}

export {
  getConversation,
}