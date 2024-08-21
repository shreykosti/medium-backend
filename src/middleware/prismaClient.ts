import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export async function prismaClient(c: any, next: any) {
  console.log("in prismaClient");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  c.prisma = prisma;

  await next();

  await prisma.$disconnect();
}
