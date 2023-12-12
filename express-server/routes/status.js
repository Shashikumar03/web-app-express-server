const express = require("express");
const router = express.Router();

router.get("/:code", (req, res) => {
  const code = parseInt(req.params.code);
  if (code >= 100 && code <= 599) {
    res.status(code).send(`status code is- ${code}`);
  } else {
    res.status(404).json({
      error: "invalid status code",
    });
  }
});
module.exports = router;
