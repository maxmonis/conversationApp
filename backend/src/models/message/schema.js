import mongoose from 'mongoose';
import UserSchema from '../user/schema';
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  user: UserSchema,
  body: String
})

export default messageSchema;