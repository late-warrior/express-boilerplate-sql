/**
 * Domain driven design - keep the domain in the centre of all interactions.
 *
 * A Blogger is represented as a User in the database with the role 'Blogger'
 *
 */
import Prisma from '@prisma/client';
import logger from '../infra/config/logger';
import { bloggerRepository } from './repository';

export class Blogger {
  user: Prisma.User;

  constructor(user: Prisma.User) {
    this.user = user;
  }

  static async findOne(id: number): Promise<Blogger> {
    const user = await bloggerRepository.findUser(id);
    logger.info('user here is', user);
    return new Blogger(user);
  }

  static async removePost(postId: number): Promise<boolean> {
    logger.info('Going to delete post with id', postId);
    const isDeleted = await bloggerRepository.deleteUserPost(postId);
    return isDeleted;
  }

  // businessLogic() {
  //   // Some complex computation involving this.user
  //   return this.user;
  // }
}
