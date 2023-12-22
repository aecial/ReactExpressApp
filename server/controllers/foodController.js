const prisma = require("../lib/PrismaProvider");

const getAllFood = async (req, res) => {
    const foods = await prisma.menu.findMany({
        where: {
            class: 'FOOD'
        }
    });
    res.json(foods);
};
const getType = async (req, res) => {
    const param = req.params.name;
    const type = param.toUpperCase();
    try {
        const foods = await prisma.menu.findMany({
            where: {
                type: type
            }
        })
        res.json(foods);
    } catch (error) {
        res.sendStatus(404);
    }
    
}
const getId = async (req, res) => {
    const paramName = req.params.name;
    const paramId = Number(req.params.id);
    const type = paramName.toUpperCase();
    const foods = await prisma.menu.findMany({
        where: {
            id: paramId,
            type: type,
            
        }
    })
    if (foods.length === 0) {
        res.sendStatus(404);
    }
    else {
        res.json(foods);
    }
}

module.exports = {
    getAllFood,
    getType,
    getId
}