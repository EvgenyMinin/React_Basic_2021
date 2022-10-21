import express from 'express';
import cors from 'cors';

import statusRoute from './routes/status.js';

const app = express();
app.use(cors());
app.use('/status', statusRoute);

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
