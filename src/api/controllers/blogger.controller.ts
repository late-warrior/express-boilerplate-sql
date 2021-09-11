import { Blogger } from '@src/domain/models';
import { Request, Response } from 'express';

/**
 * Get user
 * @public
 */
export async function getBlogger(req: Request, res: Response): Promise<void> {
  const blogger = await Blogger.findOne(Number.parseInt(req.params.userId, 10));
  res.json(blogger);
}
