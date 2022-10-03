const express = require("express");
//
const { getCareer, getCareerTasks } = require("../modules/MongoDB");

const router = express.Router();

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});


router.get("/careers/:code", async (req, res) => {
  const { code } = req.params;
  const career = await getCareer(code);

  res.json(career);
});

router.get("/careers/:code/tasks", async (req, res) => {
  const { code } = req.params;
  const tasks = await getCareerTasks(code);

  res.json(tasks);
});


module.exports = router;
