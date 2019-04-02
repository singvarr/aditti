import { model, Model, Schema } from "mongoose";
import { UserType } from "types/user";

const UserSchema = new Schema({
    login: String,
    password: String
});

const User: Model<UserType> = model("users", UserSchema);

export default User;
