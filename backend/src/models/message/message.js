import messageSchema from './schema';
import mongoose from 'mongoose';

const MessageModel = mongoose.model('message', messageSchema);

export default MessageModel;