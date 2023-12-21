const express = require('express');
const router = express.Router();

router.route("/").get((req, res) => {
    res.json({message: "FOOMD ROUTER"});
})
router.route("/chicken").get((req, res) => {
    res.json({message: "🐔"});
})


module.exports = router;