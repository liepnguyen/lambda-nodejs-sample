import express from 'express';
import serverless from 'serverless-http';
import bodyParser from 'body-parser';

import sampleRoutes from './sample/routes';

const routers = express.Router();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
routers.use('/samples', sampleRoutes);

app.use('/api', routers);

export const handler = serverless(app);