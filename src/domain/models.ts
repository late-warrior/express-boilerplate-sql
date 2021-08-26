/**
 * Models that are central to our application and follow the DDD pattern.
 */
import { prisma } from '../infra/db';

export class Repository {
  async findUser(id) {
    const user = await prisma.app_user.findUnique({ where: { id } });
    return User.fromDb(user);
  }

  async storeUser(id, user) {
    const storedUser = await prisma.app_user.upsert({
      where: { id },
      update: { ...user },
      create: { ...user },
    });
    return User.fromDb(storedUser);
  }

  async removeUser(id) {
    const deleteUser = await prisma.app_user.delete({
      where: {
        id,
      },
    });
  }

  async storeUserWithPosts() {
    const createdUser = await prisma.app_user.create({
      data: {
        name: 'Alice',
        email: 'alice@prisma.io',
        posts: {
          create: [
            { title: 'My first day at Prisma' },
            {
              title: 'How to create an Microsoft SQL Server database',
              content: 'A tutorial in progress!',
            },
          ],
        },
      },
    });
    return User.fromDb(createdUser);
  }
}

class User {
  constructor(private user) {}

  static fromDb(user) {
    return new User(user);
  }
}

class Post {
  constructor() {}
}
