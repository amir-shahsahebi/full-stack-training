const express = require("express");
const logger = require("./middleware/logger");
const dotenv = require("dotenv");
const connectDB = require("./db/connect");
const course = require("./routes/course");

const app = express();
dotenv.config();

app.use(logger);
app.use(express.json()); //built in express middleware
app.use(express.urlencoded({ extended: true })); //built in express middleware

app.get("/", (req, res) => {
  res.send("course api");
});

app.use("/courses", course);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
