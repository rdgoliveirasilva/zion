import { PrismaClient } from "../generated/prisma"; // 👈 O CAMINHO NOVO AQUI
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// A URL de runtime (com pooler) é perfeita para o app
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL, max: 5, connectionTimeoutMillis: 10000, idleTimeoutMillis: 30000, query_timeout: 15000 });

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

globalForPrisma.prisma = prisma;
