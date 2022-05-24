import { PrismaClient } from '@prisma/client';
const seeds = require('./seed.json');
//
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?schema=public`,
    },
  },
});

async function main() {
  console.log('Seeding...');
  /// --------- Pivots ---------------
  for (let pivot of seeds.pivots) {
    const pivotExists = await prisma.pivot.count({
      where: {
        id: pivot.id,
      },
    });
    if (!pivotExists) {
      console.log(`inserting pivot with id ${pivot.id}`);
      await prisma.pivot.create({ data: pivot });
    }
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
