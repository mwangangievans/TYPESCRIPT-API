import { Router } from 'express';
const router = Router();

import { indexWelcome } from '../controllers/index.controller';

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to our API!
 *     responses:
 *       200:
 *         description: Returns string "Welcome to our API!" from the main route http://localhost:PORT.
 */

router.route('/').get(indexWelcome);



export default router;