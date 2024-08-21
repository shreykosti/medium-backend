export async function BulkHandler(c: any) {
  console.log("inBulkHandler");
  const userId = c.get("userid");
  try {
    const user = await c.prisma.usercategory.findUnique({
      where: {
        userId: userId,
      },
    });

    type UserCategories = {
      webdev?: boolean;
      lifestyle?: boolean;
      firness?: boolean;
      fitness?: boolean;
      fashion?: boolean;
      travel?: boolean;
      diy?: boolean;
    };

    const usercat: UserCategories = {
      webdev: user.webdev,
      lifestyle: user.lifestyle,
      firness: user.firness,
      fashion: user.fashion,
      travel: user.travel,
      diy: user.diy,
    };

    const { webdev, lifestyle, firness, fashion, travel, diy } = usercat;

    const post = await c.prisma.postcategory.findMany({
      where: {
        OR: [
          { webdev: webdev },
          { lifestyle: lifestyle },
          { firness: firness },
          { fashion: fashion },
          { travel: travel },
          { diy: diy },
        ],
      },
      include: {
        posts: true,
      },
    });

    return c.json({ posts: post });
  } catch (e: any) {
    return c.json({ message: e }, 500);
  }
}

export async function titleBulkHandler(c: any) {
  console.log("inTitleBulkHandler");
  const title = c.req.param("title");
  try {
    const posts = await c.prisma.post.findMany({
      where: {
        title: {
          contains: title,
          mode: "insensitive",
        },
      },
    });

    if (!posts) {
      return c.json({ message: "No posts found" }, 404);
    }

    return c.json({ message: posts }, 200);
  } catch (error) {
    return c.json({ message: error }, 500);
  }
}
