const express = require("express");
const cors = require("cors");
require("dotenv").config();
//
const dbRouter = require("./routes/careers");

const app = express();
const PORT = process.env.PORT;

app.use(cors({
  origin: ["http://localhost:3000", "https://test.udecursos.study"]
}));
app.use("/api", dbRouter);
app.use(express.json());

app.get("/", async (req, res) => {
  res.json({ message: "Okey dokey" });
});


app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});

module.exports = app;
