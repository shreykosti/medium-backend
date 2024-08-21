import { decode, sign, verify } from "hono/jwt";
import { z } from "zod";

export async function signupHandler(c: any) {
  const schema = z.object({
    email: z.string().email(),
    username: z.string().min(6),
    password: z.string().min(6),
  });

  const { email, username, password } = await c.req.json();
  const res = schema.safeParse({ email, username, password });
  if (res.success == false) {
    return c.json({ message: "error in input" }, 403);
  }

  try {
    const result = await c.prisma.user.create({
      data: {
        email: email,
        password: password,
        username: username,
      },
    });
    console.log(result);

    if (!result) {
      return c.json({ message: "error in dB" }, 403);
    }

    const tocken = await sign({ id: result.id }, c.env.JWT_SECRET);
    console.log(tocken);
    return c.json({ message: "user created successFully" }, 200);
  } catch (error: any) {
    console.error(error);
    return c.json({ message: `${error.meta.target} should be unique` }, 403);
  }
}
