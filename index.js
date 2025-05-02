import express from "express";

const app = express();

app.use(express.json());
app.get("/aaoyha", (req, res) => res.json("aa gye kya "));
const port = 2000;
app.listen(port, () => {
  console.log(`server is runnign at port ${port}`);
});
