import { Document } from "mongoose";
import UserType from "@aditti/types/user";

export type UserModel = Document & UserType;
