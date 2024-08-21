export async function postreactionhandler(c: any) {
  console.log("in postreactionhandler");
  const { postId } = await c.req.json();
  try {
    const result = await c.prisma.reaction.create({
      data: {
        postId: postId,
      },
    });

    if (!result) {
      return c.json({ message: "error" }, 400);
    }

    return c.json({ message: "Post reaction created" }, 200);
  } catch (e) {
    return c.json({ message: e }, 500);
  }
}
export async function updatepostreactionhandler(c: any) {
  console.log("in postreactionhandler");
  const {
    postId,
    thumbsup,
    party,
    redface,
    cantsee,
    thinking,
    quite,
    shit,
    dislikes,
    likes,
  } = await c.req.json();
  try {
    const result = await c.prisma.reaction.update({
      where: {
        postId: postId,
      },
      data: {
        thumbsup: thumbsup == 1 ? { increment: 1 } : { increment: 0 },
        party: party == 1 ? { increment: 1 } : { increment: 0 },
        redface: redface == 1 ? { increment: 1 } : { increment: 0 },
        cantsee: cantsee == 1 ? { increment: 1 } : { increment: 0 },
        thinking: thinking == 1 ? { increment: 1 } : { increment: 0 },
        quite: quite == 1 ? { increment: 1 } : { increment: 0 },
        shit: shit == 1 ? { increment: 1 } : { increment: 0 },
        dislikes: dislikes == 1 ? { increment: 1 } : { increment: 0 },
        likes: likes == 1 ? { increment: 1 } : { increment: 0 },
      },
    });

    if (!result) {
      return c.json({ message: "error" }, 400);
    }

    return c.json({ message: "Post reaction updated" }, 200);
  } catch (e) {
    return c.json({ message: e }, 500);
  }
}

export async function votecommenthandler(c: any) {}

export async function postcategoryhandler(c: any) {
  console.log("in postcategoryhandler");
  const { postId, webdev, lifestyle, firness, fashion, travel, diy } =
    await c.req.json();
  try {
    const result = await c.prisma.postcategory.create({
      data: {
        postId: postId,
        webdev: webdev,
        lifestyle: lifestyle,
        firness: firness,
        fashion: fashion,
        travel: travel,
        diy: diy,
      },
    });

    if (!result) {
      return c.json({ message: "error" }, 400);
    }

    return c.json({ message: "Post category created" }, 200);
  } catch (e) {
    return c.json({ message: e }, 500);
  }
}
export async function updatepostcategoryhandler(c: any) {
  console.log("in updatepostcategoryhandler");
  const { postId, webdev, lifestyle, firness, fashion, travel, diy } =
    await c.req.json();
  try {
    const result = await c.prisma.postcategory.update({
      where: {
        postId: postId,
      },
      data: {
        webdev: webdev,
        lifestyle: lifestyle,
        firness: firness,
        fashion: fashion,
        travel: travel,
        diy: diy,
      },
    });

    if (!result) {
      return c.json({ message: "error" }, 400);
    }

    return c.json({ message: "Post category updated" }, 200);
  } catch (e) {
    return c.json({ message: e }, 500);
  }
}

export async function usercategoryhandler(c: any) {
  console.log("in usercategoryhandler");
  const { diy, fashion, firness, lifestyle, travel, webdev } =
    await c.req.json();

  const userId = c.get("userid");
  console.log(userId);
  try {
    const res = await c.prisma.usercategory.create({
      data: {
        userId: userId,
        diy: diy ?? false,
        fashion: fashion ?? false,
        firness: firness ?? false,
        lifestyle: lifestyle ?? false,
        travel: travel ?? false,
        webdev: webdev ?? false,
      },
    });

    if (!res) {
      return c.json({ message: "User not found" }, 400);
    }

    return c.json({ message: "User category created" }, 200);
  } catch (error) {
    return c.json({ message: error }, 500);
  }
}

export async function updateusercategoryhandler(c: any) {
  console.log("in updateusercategoryhandler");
  const { diy, fashion, firness, lifestyle, travel, webdev } =
    await c.req.json();

  const userId = c.get("userid");
  console.log(userId);
  try {
    const res = await c.prisma.usercategory.updateMany({
      where: {
        userId: userId,
      },
      data: {
        diy: diy,
        fashion: fashion,
        firness: firness,
        lifestyle: lifestyle,
        travel: travel,
        webdev: webdev,
      },
    });

    if (!res) {
      return c.json({ message: "User not found" }, 400);
    }

    return c.json({ message: "User category updated" }, 200);
  } catch (error) {
    return c.json({ message: error }, 500);
  }
}
