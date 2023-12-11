const express = require("express");
const fs = require("fs");
const uuid = require("uuid");
const json = require("./public/data/jsonData");

const app = express();
const PORT = 8000;
app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/html", (req, res) => {
  fs.readFile("index.html", "utf-8", (err, data) => {
    if (err) {
      throw err;
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/json", (req, res) => {
  res.status(200).send(json);
});

app.get("/uuid", (req, res) => {
  res.status(200).json({ uuid: uuid.v4() });
});
app.get("/status/:code", (req, res) => {
  const code = parseInt(req.params.code);
  res.status(code).send(`status code is- ${code}`);
});
app.get("/delay/:time", (req, res) => {
  const time = parseInt(req.params.time);
  setTimeout(() => {
    res.status(200).send(`delay of ${time} second`);
  }, time * 1000);
});
app.listen(PORT, () => {
  console.log("listening to port 8000");
});
