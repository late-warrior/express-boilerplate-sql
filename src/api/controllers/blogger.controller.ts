import { Request, Response } from 'express';
import { Blogger } from '../../domain/models';

/**
 * Get user
 * @public
 */
export async function getBlogger(req: Request, res: Response): Promise<void> {
  const blogger = await Blogger.findOne(Number.parseInt(req.params.userId, 10));
  res.json(blogger);
}

export async function deletePost(req: Request, res: Response): Promise<void> {
  const isDeleted = await Blogger.removePost(
    Number.parseInt(req.params.postId, 10)
  );
  res.json(isDeleted);
}
