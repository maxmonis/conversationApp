import express from 'express';
import { getConversation } from './getConversation';
import { addMessageToConversation } from './addMessageToConversation';
import { createConversation } from './createConversation';

const conversationRouter = express.Router();

conversationRouter.get('/:conversationId', getConversation);
conversationRouter.post('/:conversationId', addMessageToConversation);
conversationRouter.post('/', createConversation);

export default conversationRouter;