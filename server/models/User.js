const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
    login: String,
    password: String
});

const User = model("users", UserSchema);

module.exports = User;
