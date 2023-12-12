const express = require("express");
const jsonRouter = require("./routes/json");
const htmlRouter = require("./routes/html");
const delayRouter = require("./routes/delay");
const statusRouter = require("./routes/status");
const uuidRouter = require("./routes/uuid");

const app = express();
const PORT = 8000;

app.use("/html", htmlRouter);
app.use("/json", jsonRouter);
app.use("/delay", delayRouter);
app.use("/status", statusRouter);
app.use("/uuid", uuidRouter);
app.use((req, res) => {
  res.status(404).send("404 Page Not Found");
});

app.listen(PORT, () => {
  console.log("listening to port 8000");
});
