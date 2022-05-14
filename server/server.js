const { urlencoded } = require("express");
const express = require("express");
const logger = require("./middleware/logger");

const app = express();

app.use(logger);
app.use(express.json()); //built in express middleware
app.use(express.urlencoded({ extended: true })); //built in express middleware

app.get("/", (req, res) => {
  res.send("course api");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
