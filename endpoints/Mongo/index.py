from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

def get_career(career_code):
  client = MongoClient(os.getenv('MONGO_URI'))
  db = client.udecursos
  career = db.careers.find_one({ 'code': career_code })
  return career


