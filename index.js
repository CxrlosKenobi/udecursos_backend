const express = require("express");
const cors = require("cors");
require("dotenv").config();
//
const dbRouter = require("./routes/careers");

const app = express();
const PORT = process.env.PORT;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(cors());
app.use(express.json());
app.use("/api", dbRouter);

app.get("/", (req, res) => {
  res.json({ message: "Okey dokey" });
});


app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});

module.exports = app;
