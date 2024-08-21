import { Hono } from "hono";
import { signupHandler } from "../controllers/signup";
import { signinHandler } from "../controllers/signin";
import { updateHandler } from "../controllers/updateUser";
import {
  usercategoryhandler,
  updateusercategoryhandler,
} from "../controllers/reaction";
const app = new Hono();

app.post("/signup", signupHandler); //done
app.post("/signin", signinHandler); //done

app.put("/update/profile", updateHandler);
app.post("/category", usercategoryhandler); //done

app.put("/update/category", updateusercategoryhandler); //done

export default app;
