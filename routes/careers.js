const express = require("express");
//
const { getCareer, getCareerTasks } = require("../modules/MongoDB");

const router = express.Router();

router.get("/careers", async (req, res) => {
  const { code } = req.query;
  const career = await getCareer(code);

  res.json(career);
});

router.get("/tasks", async (req, res) => {
  const { code } = req.query;
  const tasks = await getCareerTasks(code);

  res.json(tasks);
});


module.exports = router;
