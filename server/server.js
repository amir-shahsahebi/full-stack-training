const express = require("express");
const logger = require("./middleware/logger");

const app = express();

app.use(logger);

app.get("/", (req, res) => {
  res.send("course api");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
