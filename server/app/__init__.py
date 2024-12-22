from flask import Flask
from .models import db
from flask_migrate import Migrate
from .resources import users_resource
from flask_cors import CORS
from flask_jwt_extended import JWTManager


def create_app():
    app = Flask(__name__)
    CORS(
        app,
        origins=[
            "http://localhost:5173",
            "http://192.168.8.3:5173",
            "http://192.168.8.15:5173",
        ],
    )
    jwt = JWTManager(app)
    app.config["SECRET_KEY"] = "your_secret_key_here"

    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///alumni.db"
    db.init_app(app)

    migrate = Migrate(app, db)
    app.register_blueprint(users_resource.bp)

    return app
