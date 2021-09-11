/* eslint-disable import/no-mutable-exports */
/**
 * Models that are central to our application and follow the DDD pattern.
 */
import { PrismaClient } from '@prisma/client';
import { prisma } from '../infra/db';

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

  async deleteUserPost(postId) {
    // Check if the user owns the post first
    try {
      await this.prisma.post.findUnique({
        where: { id: postId },
        rejectOnNotFound: true,
        include: {
          author: {
            select: {
              name: true,
            },
          },
        },
      });
      await this.prisma.post.delete({
        where: {
          id: postId,
        },
      });
      return true;
    } catch (error) {
      // Not authorized to delete
      throw new Error(
        `This user is not authorized to delete this post - ${error.message}`
      );
    }
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

  async deleteUserPost(postId) {
    await this.prisma.post.delete({ where: { id: postId } });
  }
}

if (!bloggerRepository) {
  bloggerRepository = new BloggerRepository(prisma);
}

if (!adminRepository) {
  adminRepository = new AdminRepository(prisma);
}
