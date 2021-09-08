import Prisma from '@prisma/client';

const { PrismaClient, Role } = Prisma;

// const { PrismaClient } = require('../../prisma/generated/client');
// console.log(pr);

export const prisma = new PrismaClient();

// Export prisma models as types for use in the application
export const UserRole = Role;

prisma.$on('beforeExit', async () => {
  console.log('beforeExit hook');
  // PrismaClient is still available if we want to record whenever this goes down
});
