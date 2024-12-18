from flask import Blueprint, request
from ..models import User, db
from flask_restful import reqparse, Api, Resource
from flask_bcrypt import check_password_hash, generate_password_hash
from sqlalchemy import or_

bp = Blueprint("user", "UserResouce")
api = Api(bp)


class UserResource(Resource):
    fields = [
        "name",
        "email",
        "username",
        "phone",
        "password",
        "course",
        "year_of_graduation",
        "gender",
    ]

    def post(self):
        user_data = request.get_json()

        for field in UserResource.fields:
            if field not in user_data:
                return {"message": f" {field} is missing"}, 400
        hashed_password = generate_password_hash(user_data.get("password"), 10)
        new_user = User(
            name=user_data["name"],
            email=user_data["email"],
            username=user_data["username"],
            phone=user_data.get("phone"),
            password=hashed_password,
            course=user_data.get("course"),
            year_of_graduation=user_data["year_of_graduation"],
            gender=user_data["gender"],
        )

        db.session.add(new_user)
        db.session.commit()

        return {"message": "Account Created"}, 201

    def get(self):
        login_data = request.get_json()

        user = User.query.filter(
            or_(
                User.email == login_data["username"],
                User.username == login_data["username"],
            )
        ).first()
        if user:
            if check_password_hash(user.to_dict()["password"],login_data["password"]):
                return user.to_dict()
            else:
                return {"message": "invalid password"}
        else:
            return {"message": "not found"}

    def delete(self):
        user = User.query.get_or_404(2)
        db.session.delete(user)
        db.session.commit()


api.add_resource(UserResource, "/add_user", "/login")
