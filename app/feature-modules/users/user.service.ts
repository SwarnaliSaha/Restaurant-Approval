import { FilterQuery, UpdateQuery } from "mongoose";
import userRepo from "./user.repo";
import { IUser } from "./user.type"
import { USER_RESPONSE } from "./user-response";
import { IRestCred, IRestaurant } from "../restaurant/restaurant.type";
import restaurantService from "../restaurant/restaurant.service";
import { Roles } from "../role/role.type";

const create = (user:IUser) => userRepo.create(user);
const find = ()=>userRepo.find();
const findOne = async (filters:Partial<IUser>) => {
    const user = await userRepo.findOne(filters);
    if(!user) throw USER_RESPONSE.USER_NOT_FOUND
    
    return user;
}
const findByIdAndUpdate = (filter:FilterQuery<IUser>,update:UpdateQuery<IUser>) =>{
    return userRepo.findByIdAndUpdate(filter,update)
}

const RegisterRestaurant = async(data:IRestaurant) =>{
     const userRole = await findOne({_id:""+data.owner_id})
     if(userRole.role?.toString()===Roles.customer.toString()){
        await findByIdAndUpdate({_id:userRole._id},{$set:{role:Roles.owner}})
     }
     const restaurant = await restaurantService.create(data);
     console.log(restaurant);
     return restaurant;
}

const findRestOfAllStatus = async() => {
    const list = await restaurantService.findRestOfAllStatus();
    return list;
}
const ApproveRestaurant = async(id:IRestCred)=>{
    const filter = {_id : id._id};
    const update = {isApproved:true}
    const restaurant = await restaurantService.findByIdAndUpdate(filter,update);
    console.log(filter,update)
    return restaurant;
}

//list of all the restaurants which has the approve status true
const findAllRestaurants = async()=>{
    const list = await restaurantService.find();
    return list;
}


export default {create,find,findOne,findByIdAndUpdate,RegisterRestaurant,ApproveRestaurant,findAllRestaurants,findRestOfAllStatus}