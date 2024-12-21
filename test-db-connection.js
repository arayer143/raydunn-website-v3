require('dotenv').config({ path: '.env.local' });
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    // Attempt to connect to the database
    await prisma.$connect();
    console.log('Successfully connected to the database');

    // Perform a simple query
    const userCount = await prisma.user.count();
    console.log(`Number of users in the database: ${userCount}`);

    // Test connection to the Client model
    const clientCount = await prisma.client.count();
    console.log(`Number of clients in the database: ${clientCount}`);

  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    // Always disconnect from the database
    await prisma.$disconnect();
  }
}

main();