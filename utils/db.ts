import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = (): PrismaClient => {
  return new PrismaClient();
};

// Type pour le stockage global
type GlobalPrisma = {
  prisma?: PrismaClient;
};

// Stockage dans l'objet global pour réutilisation
const globalForPrisma = globalThis as unknown as GlobalPrisma;

// Créer ou réutiliser l'instance Prisma
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

// Sauvegarder l'instance en mode développement
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// Déconnexion propre à la fermeture de l'application
process.on('SIGINT', async () => {
  console.log("Disconnecting Prisma Client...");
  await prisma.$disconnect();
  process.exit(0);
});

export default prisma;
