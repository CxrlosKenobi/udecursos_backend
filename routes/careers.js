const express = require("express");
//
const { getCareer, getCareerTasks } = require("../modules/MongoDB");

const router = express.Router();

// i.e.: /careers?code=INF
router.get("/careers", async (req, res) => {
  const { code } = req.query;
  const career = await getCareer(code);

  res.json(career);
});

router.get("/careers/:code/tasks", async (req, res) => {
  const { code } = req.params;
  const tasks = await getCareerTasks(code);

  res.json(tasks);
});


module.exports = router;
