/**
 * Consolidates all the routes in the application
 */
import express from 'express';
import { generateJWT, loginValidation } from '../controllers/common.controller';
import userRoutes from './blogger.route';

const router = express.Router();

/**
 * GET /status
 */
router.get('/status', (req, res) => res.send('OK'));

router.post('/login', loginValidation(), generateJWT);

/**
 * GET /docs
 */
router.use('/docs', express.static('docs'));

router.use('/users', userRoutes);

export default router;
