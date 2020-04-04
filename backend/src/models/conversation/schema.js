import mongoose from 'mongoose';
import MessageSchema from '../message/schema'
const Schema = mongoose.Schema;

const conversationSchema = new Schema({
  messages: [MessageSchema]
})

export default conversationSchema;