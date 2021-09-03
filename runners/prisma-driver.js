import Prisma from '@prisma/client';

const { PrismaClient, Role } = Prisma;

const prisma = new PrismaClient()

async function main() {
    // let allUsers = await queryUsers();
    // console.log(allUsers)
    // await createUser();
    // allUsers = await queryUsers();
    // console.log(allUsers)
    console.log(Role);
}

async function queryUsers() {
  const allUsers = await prisma.user.findMany()
  return allUsers;
}

async function createUser() {
    await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
      posts: {
        create: { title: 'Hello World' },
      },
      profile: {
        create: { bio: 'I like turtles' },
      },
    },
  })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
