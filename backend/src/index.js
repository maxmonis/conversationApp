import express from 'express';
import bodyParser from 'body-parser';
import conversationRoutes from './routes/conversation'
import cors from 'cors';
import { PORT } from './common/config';

import DBConnectionManager from './db/DBConnectionManager';
DBConnectionManager.connect();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/conversation', conversationRoutes);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));