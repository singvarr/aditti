import { Document } from "mongoose";
import UserType from "types/user";

type UserModel = Document & UserType;

export default UserModel;
