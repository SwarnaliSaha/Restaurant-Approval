import { Schema, model } from "mongoose";
import { BaseSchema } from "../../utility/base-schema";
import { IUser } from "./user.type";

const UserSchema = new BaseSchema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    role:{
        type:Schema.Types.ObjectId,
        ref:'Roles',
        required: true
    },
    restaurant_name: {
        type:String
    }
}
)
type UserDocument = Document & IUser;
export const UserModel = model<UserDocument>("Users",UserSchema);