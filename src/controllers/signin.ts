import { setSignedCookie, setCookie } from "hono/cookie";
import { decode, sign, verify } from "hono/jwt";
import { z } from "zod";

export async function signinHandler(c: any) {
  const { email, password, username } = (await c.req.json()) || {
    email: "",
    password: "",
    username: "",
  };
  console.log(email, password, username);

  const schema = z.object({
    email: z.string().email().optional(),
    password: z.string().min(6),
    username: z.string().optional(),
  });

  const res = schema.safeParse({ email, password, username });
  if (res.success === false) {
    console.log(res.error);
    return c.json({ message: "error in input" }, 400);
  }

  try {
    const result = await c.prisma.user.findFirst({
      where: {
        OR: [{ email: email ?? "hellow" }, { username: username ?? "hellow" }],
      },
    });

    console.log(result);

    if (!result) {
      return c.json({ message: "error in Db" }, 400);
    }

    const tocken = await sign({ id: result.id }, c.env.JWT_SECRET);

    await setSignedCookie(c, "Authorization", tocken, c.env.JWT_SECRET, {
      httpOnly: true,
      secure: true,
      sameSite: "Lax",
    });
  } catch (error) {
    console.error(error);
    return c.json({ message: "error" }, 400);
  }

  return c.json({ message: "Signin success full" }, 200);
}
