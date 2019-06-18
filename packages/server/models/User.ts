import { model, Model, Schema } from "mongoose";
import UserModel from "types/models";

const UserSchema: Schema = new Schema({
    login: String,
    password: String
});

const User: Model<UserModel> = model("users", UserSchema);

export default User;
