import ConversationModel from '../../models/conversation/';

const RESPONSE_CODES = {
  NOT_FOUND: 'Could not find conversation',
  ERROR: 'An error occured when saving to the conversation',
};


/**
 * Save a new chat to a conversations
 */
async function createConversation (req, res) {
  try {
    const conversation = await ConversationModel.create({chat: []});
    console.log('Created conversation ', conversation);
    if (!conversation) {
      res.status(500).send(RESPONSE_CODES.NOT_FOUND);
    }
    res.send(conversation);
  } catch (err) {
    console.log('Error creating conversation', err);
    res.status(500).send(RESPONSE_CODES.ERROR);
  }
}

export {
  createConversation,
}