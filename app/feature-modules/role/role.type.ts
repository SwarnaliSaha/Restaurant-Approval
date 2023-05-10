import mongoose from "mongoose"

export interface IRole{
    _id:string,
    name:string
}
export const Roles = {
    admin:new mongoose.mongo.ObjectId("64129e3203db3e9d36740aa5"),
    owner:new mongoose.mongo.ObjectId("6412a0aa03db3e9d36740aab"),
    customer:new mongoose.mongo.ObjectId("6413eb1caf843ed5f14fcd43")
}