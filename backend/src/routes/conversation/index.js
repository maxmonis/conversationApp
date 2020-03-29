import express from 'express';
import { getConversation } from './getConversation';
import { addToConversation } from './addToConversation';

const conversationRouter = express.Router();

conversationRouter.get('/:userId', getConversation);
conversationRouter.post('/:userId', addToConversation);

export default conversationRouter;