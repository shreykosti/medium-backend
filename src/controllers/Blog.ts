import { z } from "zod";

export async function postblogHandler(c: any) {
  console.log("in postblogHandler");
  try {
    const { title, content, published } = await c.req.json();
    const authorId = c.get("userid");

    const schema = z.object({
      title: z.string().min(3).max(20),
      content: z.string().min(3),
      published: z.boolean().optional(),
    });

    const check1 = schema.safeParse({ title, content, published });

    if (!check1.success) {
      return c.json({ message: "validation failed" }, 400);
    }

    const res1 = await c.prisma.post.create({
      data: {
        title,
        content,
        published: published ?? false,
        authorId,
      },
    });
    console.log(res1);
    if (!res1) {
      return c.json({ message: "Failed to create blog" }, 500);
    }
    return c.json({ message: "blog posted" }, 200);
  } catch (e: any) {
    return c.json({ message: "problem in posting your blog" }, 500);
  }
}

export async function updateBlogHandler(c: any) {
  console.log("in updateblogHandler");
  try {
    const { title, content, postid } = await c.req.json();
    const schema = z.object({
      title: z.string().min(3).max(20).optional(),
      content: z.string().min(3).optional(),
    });

    const check1 = schema.safeParse({ title, content });
    if (!check1.success) {
      return c.json({ message: "validation failed" }, 400);
    }

    const res1 = await c.prisma.post.update({
      where: {
        id: postid,
      },
      data: {
        title,
        content,
      },
    });

    if (!res1) {
      return c.json({ message: "Failed to update blog" }, 500);
    }

    return c.json({ message: "updateHandler" }, 200);
  } catch (e) {
    return c.json({ message: e }, 500);
  }
}

export async function publishPostHandler(c: any) {
  console.log("in publishPostHandler");
  try {
    const { published, postId } = await c.req.json();

    const res = await c.prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        published,
      },
    });

    if (!res) {
      return c.json({ message: "Failed to update blog" }, 500);
    }
    if (published) {
      return c.json({ message: "published" }, 200);
    } else {
      return c.json({ message: "unpublished" }, 200);
    }
  } catch (e) {
    return c.json({ message: e }, 500);
  }
}
