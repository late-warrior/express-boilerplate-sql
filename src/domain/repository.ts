/* eslint-disable import/no-mutable-exports */
/**
 * Models that are central to our application and follow the DDD pattern.
 */
import { PrismaClient } from '@prisma/client';
import { prisma } from '@src/infra/db';

export let bloggerRepository = null;
export let adminRepository = null;

// authenticate a user
// create a user
// create & modify a profile (respective user)
// create a post
// allow a user to delete a post (only respective user or admin)
// list all users (admin)
// delete a user (admin)

class BloggerRepository {
  prisma: PrismaClient;

  constructor(prismaClient) {
    this.prisma = prismaClient;
  }

  async findUser(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return user;
  }
}

class AdminRepository {
  prisma: PrismaClient;

  constructor(prismaClient) {
    this.prisma = prismaClient;
  }

  async listAllUsers() {
    const users = await this.prisma.user.findMany({});
    return users;
  }
}

if (!bloggerRepository) {
  bloggerRepository = new BloggerRepository(prisma);
}

if (!adminRepository) {
  adminRepository = new AdminRepository(prisma);
}
