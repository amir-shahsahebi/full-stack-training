const express = require("express");
const logger = require("./middleware/logger");
const dotenv = require("dotenv");
const connectDB = require("./db/connect");
const course = require("./routes/course");
const cors = require("cors");

const app = express();
dotenv.config();

app.use(logger);
app.use(express.json()); //built in express middleware
app.use(express.urlencoded({ extended: true })); //built in express middleware
app.use(cors()); // to ignore cors policy (this error occur when we request from one host to another host)

app.get("/", (req, res) => {
  res.send("course api");
});

app.use("/courses", course);

const PORT = process.env.PORT || 5500;

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
    await connectDB(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};

start();
