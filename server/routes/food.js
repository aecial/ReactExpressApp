const express = require('express');
const router = express.Router();

router.route("/").get((req, res) => {
    res.json({message: "FOOMD ROUTER"});
})
router.route("/itik").get((req, res) => {
    res.json({message: "ITIK"});
})
router.route("/pork").get((req, res) => {
    res.json({message: "PORK"});
})
router.route("/beef").get((req, res) => {
    res.json({message: "BEEF"});
})
router.route("/chicken").get((req, res) => {
    res.json({message: "🐔"});
})
router.route("/seafoods").get((req, res) => {
    res.json({message: "SEAFOODS"});
})
router.route("/vegetables").get((req, res) => {
    res.json({message: "VEGETABLES"});
})
router.route("/:id").get((req, res) => {
    res.json({ message: req.params.id});
})


module.exports = router;