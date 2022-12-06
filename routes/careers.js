const express = require("express");
//
const { getCareer, getCareerTasks } = require("../modules/MongoDB");

const router = express.Router();

router.get("/careers", async (req, res) => {
  const { code } = req.query;
  const career = await getCareer(code);

  if (!career) {
    res.status(404).send("Career not found");
    return;
  }

  res.status(200).json(career);
});

router.get("/tasks", async (req, res) => {
  const { code } = req.query;
  const tasks = await getCareerTasks(code);

  if (!tasks) {
    res.status(404).send("Tasks not found");
    return;
  }

  res.status(200).json(tasks);
});

module.exports = router;
