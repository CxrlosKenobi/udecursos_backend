from flask_cors import CORS, cross_origin
from flask import Flask, jsonify
#
from endpoints.Mongo.index import get_career

app = Flask(__name__)
cors = CORS(app, resources={ r"/*": { "origins": "*" } })

@app.route("/", methods=["GET"])
@cross_origin()
def index():
  return {
    "status": "okey dokey"
  }

@app.route("/careers/<career_code>", methods=["GET"])
@cross_origin()
def get_career(career_code):
  response = get_career(career_code)
  return jsonify(response)


if __name__ == "__main__":
  app.run(debug=True)
