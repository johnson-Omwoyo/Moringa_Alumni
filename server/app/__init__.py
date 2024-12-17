from flask import Flask
from .models import db
from flask_migrate import Migrate
from .resources import users_resource


def create_app():
    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///alumni.db"
    db.init_app(app)

    migrate = Migrate(app, db)
    app.register_blueprint(users_resource.bp)

    return app
