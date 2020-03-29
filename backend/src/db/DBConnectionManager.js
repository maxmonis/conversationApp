import mongoose from 'mongoose';
import { MONGODB_CONNECTION_STRING } from '../common/config'

let connection = null;

/**
 * Connect to mongodb
 */
async function connect() {
  if  (!connection) {
    const newConnection = await mongoose.connect(MONGODB_CONNECTION_STRING,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Connected to database on ', MONGODB_CONNECTION_STRING);
    connection = newConnection;
  }
}

export default {
  connect,
}