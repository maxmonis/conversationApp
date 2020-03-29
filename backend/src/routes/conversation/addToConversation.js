import ConversationModel from '../../models/conversation/';

const RESPONSE_CODES = {
  NOT_FOUND: 'Could not find conversation',
  ERROR: 'An error occured when saving to the conversation',
};


/**
 * Save a new chat to a conversations
 */
async function addToConversation (req, res) {
  const chat = req.body.chat;
  console.log(`User says ${chat}`);
  try {
    const conversation = await ConversationModel.findById(req.params.conversationId);
    if (!conversation) {
      res.status(500).send(RESPONSE_CODES.NOT_FOUND);
    }
    conversation.chat.push(chat);
    await conversation.save();
    res.send(conversation);
  } catch (err) {
    console.log('Error updating conversation', err);
    res.status(500).send(RESPONSE_CODES.ERROR);
  }
}

export {
  addToConversation,
}