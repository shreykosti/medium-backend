import { Hono } from "hono";
import { BulkHandler, titleBulkHandler } from "../controllers/bulk";
import {
  postblogHandler,
  updateBlogHandler,
  publishPostHandler,
} from "../controllers/Blog";
import {
  postcommentHandler,
  editcommentHandler,
} from "../controllers/comments";
import {
  postreactionhandler,
  votecommenthandler,
  postcategoryhandler,
  updatepostreactionhandler,
  updatepostcategoryhandler,
} from "../controllers/reaction";
const app = new Hono();

app.post("/post/blog", postblogHandler);
app.put("/post/publish", publishPostHandler);
app.put("/update/blog", updateBlogHandler);

app.post("/post/reaction", postreactionhandler);
app.put("/update/post/reaction", updatepostreactionhandler);
app.post("/post/category", postcategoryhandler);
app.put("/update/post/category", updatepostcategoryhandler);

app.get("/blog/bulk", BulkHandler); //get all blog by category
app.get("/getblog/:title", titleBulkHandler); //get blog by title

app.post("/post/comment", postcommentHandler);
app.put("/update/comment", editcommentHandler);
app.put("/reaction/comment/vote", votecommenthandler);
export default app;
