const prisma = require("../lib/PrismaProvider");

const getAllItems = async (req, res) => {
    const foods = await prisma.menu.findMany();
    res.json(foods);
};

module.exports = {
    getAllItems,
}