const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;

async function getCareer(code) {
  const client = new MongoClient(uri);
  
  try {
    const db = client.db("udecursos");
    const collection = db.collection("careers");
    const career = await collection.findOne({ code: code });

    return career;

  } finally {
    await client.close();
  }
};

async function getCareerTasks(code) {
  const client = new MongoClient(uri);

  try {
    const db = client.db("udecursos");
    const collection = db.collection("global_tasks");

    const cursor = collection.find({ "properties.careers": code });
    const tasks = await cursor.toArray();

    return tasks;

  } finally {
    await client.close();
  }
};

module.exports = {
  getCareer,
  getCareerTasks
};
