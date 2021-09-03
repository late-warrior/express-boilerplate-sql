/**
 * Consolidates all the routes in the application
 */
import express from 'express';
import userRoutes from './blogger.route';

const router = express.Router();

/**
<<<<<<< HEAD
 * GET v1/status
=======
 * GET /status
>>>>>>> d42c06c (first commit)
 */
router.get('/status', (req, res) => res.send('OK'));

/**
<<<<<<< HEAD
 * GET v1/docs
=======
 * GET /docs
>>>>>>> d42c06c (first commit)
 */
router.use('/docs', express.static('docs'));

router.use('/users', userRoutes);

export default router;
