const express = require('express');
const router = express.Router();
const foodController = require("../controllers/foodController");

router.route("/").get(foodController.getAllFood);
router.route("/:name").get(foodController.getType);
router.route("/:name/:id").get(foodController.getId);


module.exports = router;