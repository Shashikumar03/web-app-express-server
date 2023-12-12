const express = require("express");
const router = express.Router();
const jsonData = require("../public/data/jsonData");


router.get("/", (req, res) => {
  res.status(200).send(jsonData);
});
module.exports = router;
