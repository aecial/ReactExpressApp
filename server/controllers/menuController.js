const prisma = require("../lib/PrismaProvider");
const multer = require("multer");
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
    console.log("part1");
    const { name, price, type } = req.body;
    const file = await req.file;
    console.log(name);
    const editedPrice = Number(price);
    console.log(editedPrice);
    file.name;
    const editedImage = `/images/${file.originalname}`;
    console.log(editedImage);
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
const uploadMiddleware = upload.single("image");
module.exports = {
  getAllItems,
  addItem,
  uploadMiddleware,
};
