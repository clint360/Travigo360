import express from 'express';
import cors from 'cors';
import config from './config';
import { UserRouter } from './routes/userRoute';

const app = express();


app.use(cors());
app.use(express.json());

//Routes
app.use('/api', UserRouter);


app.listen(config.port, () =>
  console.log(`Server is live @ ${config.hostUrl}`),
);
