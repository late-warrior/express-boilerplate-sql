/**
 * Consolidates all the routes in the application
 */
import express from 'express';
import {
  emailTokenValidation,
  generateEmailToken,
  generateJWT,
  jwtTokenValidation,
} from '../controllers/common.controller';
import userRoutes from './blogger.route';

const router = express.Router();

/**
 * GET /status
 */
router.get('/status', (req, res) => res.send('OK'));

// Passwordless login - so distinction between registration and subsequent login
// TODO: The short-lived token should be sent to the user's email
router.post('/login', emailTokenValidation(), generateEmailToken);

// Endpoint to get a long-lived stateless JWT token - the short-lived emailToken needs to be provided
router.post('/authenticate', jwtTokenValidation(), generateJWT);

/**
 * GET /docs
 */
router.use('/docs', express.static('docs'));

router.use('/users', userRoutes);

export default router;
