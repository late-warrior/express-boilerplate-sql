import { UserRole } from '@src/infra/db';
import express from 'express';
import { authorize } from '../../infra/auth-middleware';
import { getBlogger } from '../controllers/blogger.controller';

const router = express.Router();

router.route('/:userId').get(getBlogger);
router
  .route('/auth/status/:userId')
  .get(authorize([UserRole.BLOGGER, UserRole.ADMIN]), getBlogger);

export default router;
