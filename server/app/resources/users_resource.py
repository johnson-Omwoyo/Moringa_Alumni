from flask import Blueprint, request
from ..models import User, db
from flask_restful import reqparse, Api, Resource

bp = Blueprint("user", "UserResouce")
api = Api(bp)


class UserResource(Resource):
    fields = [
        "name",
        "email",
        "username",
        "phone",
        "password"
        "course",
        "year_of_graduation",
        "gender",
    ]

    def post(self):
        user_data = request.get_json()

        for field in UserResource.fields:
            if field not in user_data:
                return {"message": f"{field} is missing"}, 400

        new_user = User(
            name=user_data["name"],
            email=user_data["email"],
            username=user_data["username"],
            phone=user_data.get("phone"),
            password = user_data.get("password"),
            course=user_data.get("course"),
            year_of_graduation=user_data["year_of_graduation"],
            gender=user_data["gender"],
        )

        db.session.add(new_user)
        db.session.commit()

        return user_data, 201


api.add_resource(UserResource, "/add_user")
