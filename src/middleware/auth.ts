import { verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { getSignedCookie } from "hono/cookie";
export async function auth(c: any, next: any) {
  console.log("auth middleware");

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const tocken = await getSignedCookie(c, c.env.JWT_SECRET, "Authorization");
    const check = await verify(tocken || "", c.env.JWT_SECRET);

    if (!check) {
      return c.json({ message: "invalid token" }, 403);
    }

    const user = await prisma.user.findUnique({
      where: {
        id: check.id as string,
      },
    });

    if (!user) {
      return c.json({ message: "user not found !" }, 403);
    }

    c.set("userid", user.id);
    await next();
  } catch (error) {
    console.error(error);
    return c.json({ message: "user not found !" }, 403);
  }
}
