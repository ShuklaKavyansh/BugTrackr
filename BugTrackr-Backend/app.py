from flask import Flask, request, jsonify
from flask_cors import CORS
import uuid

app = Flask(__name__)
CORS(app)

bugs = []

@app.route("/bugs", methods=["GET"])
def get_bugs():
    return jsonify(bugs)

@app.route("/bugs", methods=["POST"])
def add_bug():
    data = request.get_json()
    new_bug = {
        "id": str(uuid.uuid4()),
        "title": data["title"],
        "description": data["description"],
        "status": data.get("status", "Open")
    }
    bugs.append(new_bug)
    return jsonify(new_bug), 201

@app.route("/bugs/<bug_id>", methods=["DELETE"])
def delete_bug(bug_id):
    global bugs
    bugs = [bug for bug in bugs if bug["id"] != bug_id]
    return jsonify({"message": "Bug deleted"}), 200

@app.route("/bugs/<bug_id>", methods=["PUT"])
def update_bug(bug_id):
    data = request.get_json()
    for bug in bugs:
        if bug["id"] == bug_id:
            bug["title"] = data.get("title", bug["title"])
            bug["description"] = data.get("description", bug["description"])
            bug["status"] = data.get("status", bug["status"])
            return jsonify(bug), 200
    return jsonify({"message": "Bug not found"}), 404

if __name__ == "__main__":
    app.run(debug=True)
