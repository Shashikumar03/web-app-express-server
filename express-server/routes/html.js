const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  fs.readFile("express-server/index.html", "utf-8", (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
module.exports = router;
