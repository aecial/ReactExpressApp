const express = require("express");
const app = express();
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
// app.post("/api/new", upload.single("image"), async (req, res, file) => {
//   try {
//     console.log("part1");
//     const { name, price, type } = req.body;
//     const file = await req.file;
//     console.log(name);
//     const editedPrice = Number(price);
//     console.log(editedPrice);
//     file.name;
//     const editedImage = `/images/${file.originalname}`;
//     console.log(editedImage);
//     const newItem = await prisma.menu.create({
//       data: {
//         name: name,
//         price: editedPrice,
//         type: type,
//         image: editedImage,
//       },
//     });
//     res.json({ message: `Successfully Added ${name}` });
//   } catch (error) {
//     // res.sendStatus(500);
//     res.json(error);
//   }
// });
app.get("*", (req, res) => {
  res.sendStatus(404);
});
