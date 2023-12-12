const express = require("express");
const router = express.Router();
const uuid = require("uuid");

router.get("/", (req, res) => {
  res.status(200).json({ uuid: uuid.v4() });
});
module.exports = router;
