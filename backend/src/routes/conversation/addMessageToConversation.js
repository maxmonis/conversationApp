import ConversationModel from '../../models/conversation';

const RESPONSE_CODES = {
  NOT_FOUND: 'Could not find conversation',
  ERROR: 'An error occured when saving to the conversation',
};


/**
 * Save a new message to a conversation and return the message if successful
 */
async function addMessageToConversation (req, res) {
  const message = req.body.message;
  console.log(`User says ${message}`);
  try {
    const conversation = await ConversationModel.findById(req.params.conversationId);
    console.log('conversation', conversation);
    if (!conversation) {
      res.status(500).send(RESPONSE_CODES.NOT_FOUND);
    }
    conversation.messages.push(message);
    await conversation.save();
    res.send(message);
  } catch (err) {
    console.log('Error updating conversation', err);
    res.status(500).send(RESPONSE_CODES.ERROR);
  }
}

export {
  addMessageToConversation,
}