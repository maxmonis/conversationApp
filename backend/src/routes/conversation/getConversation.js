import ConversationModel from '../../models/conversation/';

const RESPONSE_CODES = {
  NOT_FOUND: 'Could not find conversation',
  ERROR: 'An error occured when retrieving conversation',
};


/**
 * Retrieve all conversations for the current user
 */
async function getConversation(req, res) {
  try {
    const conversation = await ConversationModel.findById(req.params.conversationId);
    if (!conversation) {
      res.status(500).send(RESPONSE_CODES.NOT_FOUND);
    }
    res.send(conversation);
  } catch (err) {
    console.log('Error retrieving conversation ', err);
    res.status(500).send(RESPONSE_CODES.ERROR);
  }
}

export {
  getConversation,
}