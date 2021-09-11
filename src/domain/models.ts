/**
 * Domain driven design - keep the domain in the centre of all interactions.
 */
import Prisma from '@prisma/client';
import logger from '@src/infra/config/logger';
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

  // businessLogic() {
  //   // Some complex computation involving this.user
  //   return this.user;
  // }
}
