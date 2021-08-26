import Prisma from '@prisma/client';
const { PrismaClient } = Prisma;

// const { PrismaClient } = require('../../prisma/generated/client');
// console.log(pr);

export const prisma = new PrismaClient();

prisma.$on('beforeExit', async () => {
  console.log('beforeExit hook');
  // PrismaClient is still available if we want to record whenever this goes down
});
