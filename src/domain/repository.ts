/* eslint-disable import/no-mutable-exports */
/**
 * Models that are central to our application and follow the DDD pattern.
 */
import { PrismaClient, User } from '@prisma/client';
import { CONFIG } from '@src/infra/config/vars';
import { add } from 'date-fns';
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

// Generate a random 8 digit number as the email token
function generateEmailToken(): string {
  return Math.floor(10_000_000 + Math.random() * 90_000_000).toString();
}

export async function issueMailToken(email: string): Promise<void> {
  // While storing a token for passwordless login, we either create both user and token at the same
  // time or create only the token if the user exists
  const emailToken = generateEmailToken();
  // 👇 create a date object for the email token expiration
  const tokenExpiration = add(new Date(), {
    minutes: CONFIG.emailTokenExpirationMinutes,
  });
  await prisma.token.create({
    data: {
      emailToken,
      type: this.prisma.TokenType.EMAIL,
      expiration: tokenExpiration,
      user: {
        connectOrCreate: {
          create: {
            email,
          },
          where: {
            email,
          },
        },
      },
    },
  });
}

/**
 * Validates the email token issued to the user
 * @param email
 * @param emailToken
 * @returns
 */
export async function validateMailToken(
  email: string,
  emailToken: string
): Promise<User> {
  // Get short lived email token
  const fetchedEmailToken = await prisma.token.findUnique({
    where: {
      emailToken,
    },
    include: {
      user: true,
    },
  });

  if (!fetchedEmailToken?.valid) {
    // If the token doesn't exist or is not valid, return 401 unauthorized
    throw new Error('Token not valid');
  }

  if (fetchedEmailToken.expiration < new Date()) {
    // If the token has expired, return 401 unauthorized
    throw new Error('Token expired');
  }
  // If token matches the user email passed in the payload, generate long lived API token
  if (fetchedEmailToken?.user?.email !== email) {
    throw new Error('Invalid token for this user');
  }
  return fetchedEmailToken.user;
}
