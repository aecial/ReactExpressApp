const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");

router
  .route("/")
  .get(menuController.getAllItems)
  .post(
    [menuController.authenticateToken, menuController.uploadMiddleware],
    menuController.addItem
  )
  .put(menuController.authenticateToken, menuController.updateItem)
  .delete(menuController.authenticateToken, menuController.deleteItem);
const foodRouter = require("./food");
router.use("/food", foodRouter);

const drinkRouter = require("./drink");
router.use("/drink", drinkRouter);

const othersRouter = require("./others");
router.use("/others", othersRouter);
module.exports = router;
