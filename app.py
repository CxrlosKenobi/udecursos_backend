from flask_cors import CORS, cross_origin
from flask import Flask, jsonify

app = Flask(__name__)
cors = CORS(app, resources={ r"/*": { "origins": "*" } })

@app.route("/", methods=["GET"])
@cross_origin()
def index():
  return {
    "status": "okey dokey"
  }

if __name__ == "__main__":
  app.run(debug=True)
