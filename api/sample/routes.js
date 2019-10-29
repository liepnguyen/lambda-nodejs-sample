import express from 'express';

import * as sampleController from './controllers/sample.controller';

const router = express.Router();

router.route('/').get(sampleController.get);

export default router;