from flask import Flask, jsonify, request, send_from_directory
import os

app = Flask(__name__, static_folder=".", static_url_path="")

# -----------------------------------------
# Home page
# -----------------------------------------

@app.route("/")
def home():
    return send_from_directory(".", "index.html")


# -----------------------------------------
# Registration API
# -----------------------------------------

@app.route("/register", methods=["POST"])
def register():

    data = request.get_json(silent=True)

    if not data:
        return jsonify({
            "success": False,
            "message": "No registration data received."
        }), 400

    name = data.get("studentName", "").strip()
    email = data.get("studentEmail", "").strip()
    event = data.get("eventSelect", "").strip()

    if not name or not email or not event:
        return jsonify({
            "success": False,
            "message": "Please complete all registration fields."
        }), 400

    return jsonify({
        "success": True,
        "message": f"Registration successful for {event}."
    })


# -----------------------------------------
# Run application
# -----------------------------------------

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))

    app.run(
        host="0.0.0.0",
        port=port,
        debug=True
    )