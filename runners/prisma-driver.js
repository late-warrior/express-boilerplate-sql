const { PrismaClient } = require('../prisma/generated/client');

const prisma = new PrismaClient();

async function main() {
  // Create a user and two posts
  const createUser = await prisma.app_user.create({
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

  // Return all posts
  const allPosts = await prisma.post.findMany({});

  console.log(allPosts);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
