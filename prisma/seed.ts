import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();
async function main() {
  const email = 'demo@example.com';
  const password = await bcrypt.hash('password123', 10);
  await prisma.user.upsert({
    where: { email },
    update: {},
    create: { email, password },
  });
}
main().finally(() => prisma.$disconnect());