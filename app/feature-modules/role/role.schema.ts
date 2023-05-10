import { model } from "mongoose";
import { BaseSchema } from "../../utility/base-schema";
import { IRole } from "./role.type";

const RoleSchema = new BaseSchema({
    name: {
        type:String,
        required:true
    }
}
)
type RoleDocument = Document & IRole;
export const RoleModel = model<RoleDocument>("Roles",RoleSchema);