import { Hono } from "hono";
import handlers from "./routes/index";
import { auth } from "./middleware/auth";
import { prismaClient } from "./middleware/prismaClient";
const app = new Hono();
//middlewares
app.use("/api/v1/blog/*", auth);
app.use("/api/v1/user/update/*", auth);
app.use("/api/v1/user/category", auth);
app.use("/api/v1/*", prismaClient);
//
app.route("/api/v1", handlers);

export default app;
