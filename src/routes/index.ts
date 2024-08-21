import { Hono } from "hono";
import blog from "./blog";
import user from "./user";
import { deleteCookie } from "hono/cookie";
const app = new Hono();

app.route("/blog", blog);
app.route("/user", user);

app.delete("/signout", async (c: any) => {
  deleteCookie(c, "Authorization");
  return c.json({ message: "Signout success full" }, 200);
});

export default app;
