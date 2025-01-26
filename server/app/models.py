from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin


db = SQLAlchemy()


class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False, unique=False)
    email = db.Column(db.String, nullable=False, unique=True)
    username = db.Column(db.String, nullable=False, unique=True)
    phone = db.Column(db.String, nullable=True)
    password = db.Column(db.String, nullable=False)
    course = db.Column(db.String, nullable=False, unique=False)
    year_of_graduation = db.Column(db.String, nullable=True, unique=False)
    gender = db.Column(db.String, nullable=True)

    serialize_rules = ("-year_of_graduation ",)


class Cohort(db.Model, SerializerMixin):
    __tablename__ = "cohorts"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    messages = db.relationship("CohortMessage", backref="cohort", lazy=True)
    members = db.relationship("UserCohort", backref="cohort", lazy=True)


class Message(db.Model, SerializerMixin):
    __tablename__ = "messages"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    text = db.Column(db.String, nullable=False)
    date = db.Column(db.String)
    time = db.Column(db.String)
    deleted = db.Column(db.Boolean, default=False)


class New(db.Model, SerializerMixin):
    __tablename__ = "news"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    text = db.Column(db.String, nullable=False)
    posted_by = db.Column(db.String, nullable=False)
    date_posted = db.Column(db.String)
    # deleted = db.Column(db.Boolean, default=False)


class Story(db.Model, SerializerMixin):
    __tablename__ = "stories"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    posted_by = db.Column(db.String, nullable=False)
    text = db.Column(db.String, nullable=False)
    likes = db.Column(db.Integer)
    comments = db.relationship("StoryComment", backref="story", lazy=True)
    User_id = db.Column(db.Integer)


class Comment(db.Model, SerializerMixin):
    __tablename__ = "comments"

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, nullable=False)
    date_posted = db.Column(db.String)
    deleted = db.Column(db.Boolean, default=False)


class UserCohort(db.Model, SerializerMixin):
    __tablename__ = "users_cohorts"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    cohort_id = db.Column(db.Integer, db.ForeignKey("cohorts.id"), nullable=False)
    removed = db.Column(db.Integer, default=False)
    admin = db.Column(db.Boolean, default=False)


class StoryComment(db.Model, SerializerMixin):
    __tablename__ = "stories_comments"

    id = db.Column(db.Integer, primary_key=True)
    story_id = db.Column(db.Integer, db.ForeignKey("stories.id"), nullable=False)
    comment_id = db.Column(db.Integer, db.ForeignKey("comments.id"))


class CohortMessage(db.Model, SerializerMixin):
    __tablename__ = "cohorts_messages"

    id = db.Column(db.Integer, primary_key=True)
    cohort_id = db.Column(db.Integer, db.ForeignKey("cohorts.id"))
    message_id = db.Column(db.Integer, db.ForeignKey("messages.id"))
