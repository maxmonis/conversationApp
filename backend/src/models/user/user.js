import userSchema from './schema';
import mongoose from 'mongoose';

const UserModel = mongoose.model('user', userSchema);

export default UserModel;