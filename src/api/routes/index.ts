/**
 * Consolidates all the routes in the application
 */
import express from 'express';
import userRoutes from './user.route';

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'));

router.use('/users', userRoutes);

export default router;