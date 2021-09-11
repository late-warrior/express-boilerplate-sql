import Prisma from '@prisma/client';

const { PrismaClient, Role } = Prisma;

const prisma = new PrismaClient();

async function main() {
  // let allUsers = await queryUsers();
  // console.log(allUsers)
  // await createUser();
  // allUsers = await queryUsers();
  // console.log(allUsers)
  // console.log(Role);
  queryUserPost(1);
}

async function queryUsers() {
  const allUsers = await prisma.user.findMany();
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
  });
}

async function queryUserPost(postId) {
  // Check if the user owns the post first
  const post = await prisma.post.findUnique({
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
  console.log(post);
  return post;
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
