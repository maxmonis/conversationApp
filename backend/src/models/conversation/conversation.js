import conversationSchema from './schema';
import mongoose from 'mongoose';

const ConversationModel = mongoose.model('conversation', conversationSchema);

export default ConversationModel;