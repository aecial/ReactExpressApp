const express = require("express");
const app = express();

app.listen(5000, () => {
  console.log(`Server is listening on port 5000`);
});
//Middlewares
app.use(express.json());

//Routes
app.get("/api", (req, res) => {
  res.send("Welcome to the index page");
});
const menuRouter = require("./routes/menu");
app.use("/api/menu", menuRouter);
app.get("*", (req, res) => {
  res.sendStatus(404);
});
