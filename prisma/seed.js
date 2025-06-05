import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const products = JSON.parse(
  readFileSync(join(__dirname, 'products.json'), 'utf-8')
);

const prisma = new PrismaClient();

async function main() {
  try {
    // Clear existing products
    await prisma.product.deleteMany({});
    
    // Create new products
    for (const product of products) {
      await prisma.product.create({
        data: product,
      });
    }
    
    console.log('✅ Seed completed successfully');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
