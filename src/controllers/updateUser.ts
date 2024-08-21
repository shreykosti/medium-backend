export async function updateHandler(c: any) {
  const userid = c.get("userid");
  console.log(userid);
  return c.json({ message: "updateHandler" }, 200);
}
