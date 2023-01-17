import express from 'express';
import cors from 'cors';

import statusRoute from './routes/status.js';

const app = express();
app.use(cors());
app.use('/status', statusRoute);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return next();
});

app.listen(5000);
