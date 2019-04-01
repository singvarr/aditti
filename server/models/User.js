import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    login: String,
    password: String
});

const User = model("users", UserSchema);

export default User;
