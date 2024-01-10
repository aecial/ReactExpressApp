require("dotenv").config();
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/images/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
app.listen(5000, () => {
  console.log(`Server is listening on port 5000`);
});
//Middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Routes
app.get("/api", (req, res) => {
  res.send("Welcome to the index page");
});
const menuRouter = require("./routes/menu");
const prisma = require("./lib/PrismaProvider");
app.use("/api/menu", menuRouter);
app.get("/api/romr", authenticateToken, (req, res) => {
  res.json({ message: "authenticated" });
});
app.post("/api/login", async (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  const authEmail = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
  });
  if (authEmail) {
    const confirmPass = await bcrypt.compare(user.password, authEmail.password);
    if (confirmPass) {
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
      res.json({ accessToken: accessToken });
    } else {
      res.json({ message: "Invalid Password" });
    }
  } else {
    res.json("No Acc");
  }
});
app.post("/api/register", async (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };
  const hashedPassword = await bcrypt.hash(user.password, 10);
  const addNewUser = await prisma.user.create({
    data: {
      email: user.email,
      password: hashedPassword,
    },
  });
  res.json({ message: "Added new User" });
});
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
app.get("*", (req, res) => {
  res.sendStatus(404);
});
