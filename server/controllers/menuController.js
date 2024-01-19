const prisma = require("../lib/PrismaProvider");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./../client/public/images/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
const getAllItems = async (req, res) => {
  const foods = await prisma.menu.findMany();
  res.json(foods);
};
const addItem = async (req, res) => {
  try {
    const { name, price, type } = req.body;
    const file = await req.file;

    const editedPrice = Number(price);

    file.name;
    const editedImage = `/images/${file.originalname}`;

    const newItem = await prisma.menu.create({
      data: {
        name: name,
        price: editedPrice,
        type: type,
        image: editedImage,
      },
    });
    res.json({ message: `Successfully Added ${name}` });
  } catch (error) {
    // res.sendStatus(500);
    res.json(error);
  }
};
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
const uploadMiddleware = upload.single("image");
module.exports = {
  getAllItems,
  addItem,
  uploadMiddleware,
  authenticateToken,
};
