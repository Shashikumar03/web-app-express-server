const express = require("express");
const router = express.Router();

router.get("/:time", (req, res) => {
  const time = parseInt(req.params.time);
  if (isNaN(time) || time < 1) {
    res.status(400).send({
      error: "invalid time",
    });
  } else {
    setTimeout(() => {
      res.status(200).json(`delay of ${time} second`);
    }, time * 1000);
  }
});

module.exports = router;
