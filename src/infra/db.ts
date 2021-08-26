import { PrismaClient } from '../../prisma/generated/client';

export const prisma = new PrismaClient();

prisma.$on('beforeExit', async () => {
  console.log('beforeExit hook');
  // PrismaClient is still available if we want to record whenever this goes down
});
