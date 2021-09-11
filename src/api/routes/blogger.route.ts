import express from 'express';
import { authorize } from '../../infra/auth-middleware';
import { UserRole } from '../../infra/db';
import { deletePost, getBlogger } from '../controllers/blogger.controller';

const router = express.Router();

router.route('/:userId').get(getBlogger);
router.route('/delete-post/:postId').delete(deletePost);
// Example of an authorized route
router
  .route('/auth/status/:userId')
  .get(authorize([UserRole.BLOGGER, UserRole.ADMIN]), getBlogger);

export default router;
