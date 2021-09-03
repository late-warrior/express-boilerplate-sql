/**
 * Models that are central to our application and follow the DDD pattern.
 */
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
  async findUser(id) {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
  }

  // async updateUserProfile(userId, profile) {
  //   await prisma.
  // }

  // async storeUser(id, user) {
  //   const storedUser = await prisma.app_user.upsert({
  //     where: { id },
  //     update: { ...user },
  //     create: { ...user },
  //   });
  //   return User.fromDb(storedUser);
  // }

  // async removeUser(id) {
  //   const deleteUser = await prisma.app_user.delete({
  //     where: {
  //       id,
  //     },
  //   });
  // }

  // async storeUserWithPosts() {
  //   const createdUser = await prisma.app_user.create({
  //     data: {
  //       name: 'Alice',
  //       email: 'alice@prisma.io',
  //       posts: {
  //         create: [
  //           { title: 'My first day at Prisma' },
  //           {
  //             title: 'How to create an Microsoft SQL Server database',
  //             content: 'A tutorial in progress!',
  //           },
  //         ],
  //       },
  //     },
  //   });
  //   return User.fromDb(createdUser);
  // }
}

class AdminRepository {
  async listAllUsers() {
    const users = await prisma.user.findMany({});
    return users;
  }
}

if (!bloggerRepository) {
  bloggerRepository = new BloggerRepository();
}

if (!adminRepository) {
  adminRepository = new AdminRepository();
}
