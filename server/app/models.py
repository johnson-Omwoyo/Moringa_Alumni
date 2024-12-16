from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin


db = SQLAlchemy()


class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False, unique=False)
    email = db.Column(db.String, nullable=False, unique=True)
    username = db.Column(db.String, nullable=False, unique=True)
    phone = db.Column(db.String, nullable=False, unique=True)
    course = db.Column(db.String, nullable=False, unique=False)
    year_of_graduation = db.Column(db.String, nullable=False, unique=False)
    gender = db.Column(db.String, nullable=True)


class Cohort(db.Model, SerializerMixin):
    __tablename__ = "cohorts"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(
        db.String,
        nullable=False,
    )
    description = db.Column(
        db.String,
        nullable=False,
    )
    messages = "Foreign"
    members = "Foreign"
    Admins = "Foreign"


class New(db.Model, SerializerMixin):
    __tablename__ = "news"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    text = db.Column(db.String, nullable=False)
    image = "AI and get to know how to store the image"
    posted_by = db.Column("The name of the one who posted the news")
    date_posted = "This will have the date when the post was created"
    deleted = db.Column(db.Boolean, default=False)


class Story(db.Model, SerializerMixin):
    __tablename__ = "stories"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    posted_by = db.Column(db.String, nullable=False)
    text = db.Column(db.String, nullable=False)
    likes = db.Column(db.Integer)
    image = "this wiill be the image"
    comments = "Foreign"
    User_id = db.Column(db.Integer)


class Comment(db.Model, SerializerMixin):
    __tablename__ = "comments"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)
    story_id = db.Columnn(db.Integer, nullable=False)
    date_posted = db.Column(db.String)
    deleted = db.Column(db.Boolean, default=False)
