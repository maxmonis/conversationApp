import express from 'express';
import { getConversation } from './getConversation';
import { addToConversation } from './addToConversation';
import { createConversation } from './createConversation';

const conversationRouter = express.Router();

conversationRouter.get('/:conversationId', getConversation);
conversationRouter.post('/:conversationId', addToConversation);
conversationRouter.post('/', createConversation);

export default conversationRouter;