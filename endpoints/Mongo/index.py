from pymongo import MongoClient
from bson import ObjectId, json_util
from dotenv import load_dotenv
import json
import os

load_dotenv()

def career_data(career_code):
  client = MongoClient(os.getenv('MONGO_URI'))
  db = client.udecursos
  career = db.careers.find_one({ 'code': career_code })
  career = json.loads(json.dumps(
    career,
    default=json_util.default,
    ensure_ascii=False,
    indent=2
  ))

  return career

def career_tasks(career_code):
  client = MongoClient(os.getenv('MONGO_URI'))
  db = client.udecursos
  tasks = db.global_tasks.find({ 'properties.careers': career_code })
  tasks = [task for task in tasks]
  tasks = json.loads(json.dumps(
    tasks,
    default=json_util.default,
    ensure_ascii=False,
    indent=2
  ))

  return tasks

