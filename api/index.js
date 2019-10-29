import express from 'express';
import serverless from 'serverless-http';
import bodyParser from 'body-parser';

import sampleRoutes from './sample/routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/samples', sampleRoutes);

export const handler = serverless(app);