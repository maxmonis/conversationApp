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
    const conversation = await ConversationModel.create({
      messages: [
        {
          user: {
            name: `Test Testerson`,
            profilePicture: `https://www.thesprucepets.com/thmb/iUPr_d3DJ78DFE_7q6FcPxeGaHU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/twenty20_d2b57e80-6815-4c83-9ea6-0e1438e9b79f-5ac3b27deb97de0037092d49.jpg`,
            status: `ACTIVE`
          },
          body: 'HI'
        }
      ]
    });

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