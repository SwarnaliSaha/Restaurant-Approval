import { compare, genSalt, hash } from "bcryptjs";
import { IUser } from "../users/user.type";
import userService from "../users/user.service";
import { ICredential } from "./auth.type";
import { Roles } from "../role/role.type";
import { AUTH_RESPONSES } from "./auth.responses";
import { sign, verify } from "jsonwebtoken";

const encryptedPassword = async (user:IUser)=>{
    const salt = await genSalt(10);
    const hashedPassword = await hash(user.password,salt);
    user.password = hashedPassword;
    return user;
}

const register = async (user:IUser)=>{
    user = await encryptedPassword(user);
    if(!user.role && user.restaurant_name) user.role=Roles.owner;
    if(!user.role && !user.restaurant_name) user.role = Roles.customer;

    let record = await userService.create(user);
    return record;
}

const login = async(credential:ICredential)=>{
    const user = await userService.findOne({email:credential.email});
    if(!user) throw AUTH_RESPONSES.INVALID_USER_CREDENTIALS;

    const isPasswordValid = await compare(credential.password,user.password)
    if(!isPasswordValid) throw AUTH_RESPONSES.INVALID_USER_CREDENTIALS;

    const {JWT_TOKEN} = process.env;
    console.log(JWT_TOKEN)
    const {_id,role} = user;
    const token = sign({id:_id,role:role},JWT_TOKEN||"");
    return {token};
}
export default {register,login}