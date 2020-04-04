import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  profilePicture: String,
  status: String,
})

export default userSchema;