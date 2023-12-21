const express = require('express');
const router = express.Router();

router.route("/").get((req, res) => {
    res.json({ romr: "Menu"});
})
const foodRouter = require("./food");
router.use("/food", foodRouter);

const drinkRouter = require("./drink");
router.use("/drink", drinkRouter);

const othersRouter = require("./others")
router.use("/others", othersRouter);
module.exports = router;