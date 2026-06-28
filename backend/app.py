from flask import Flask
from flask_cors import CORS

from database import db

app = Flask(__name__)

CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

from models import Note
from routes import register_routes

register_routes(app)

@app.route("/")
def home():
    return "QuickNote Backend is Running!"

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)