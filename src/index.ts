import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import db from './db';
import router from './routes/family.routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/familymembers', router);

db.then(() => {
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
});
