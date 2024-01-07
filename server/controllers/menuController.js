const prisma = require("../lib/PrismaProvider");

const getAllItems = async (req, res) => {
  const foods = await prisma.menu.findMany();
  res.json(foods);
};
const addItem = async (req, res) => {
  try {
    const { name, price, image, type } = req.body;
    const editedPrice = Number(price);
    const newItem = await prisma.menu.create({
      data: {
        name: name,
        image: image,
        price: editedPrice,
        type: type,
      },
    });
    res.json({ message: `Successfully Added ${name}` });
  } catch (error) {
    //res.sendStatus(500);
    res.json(error);
  }
};
module.exports = {
  getAllItems,
  addItem,
};
