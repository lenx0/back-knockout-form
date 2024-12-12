import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';
import { connectDatabase } from './config/database';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use('/api', router);

connectDatabase();

export default app;