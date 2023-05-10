import { FilterQuery, UpdateQuery } from "mongoose";
import { RestaurantModel } from "./restaurant.schema";
import { IRestaurant } from "./restaurant.type";

const create = (restaurant:IRestaurant) => RestaurantModel.create(restaurant);
const findByIdAndUpdate = (filter:FilterQuery<IRestaurant>,update:UpdateQuery<IRestaurant>) =>{
    return RestaurantModel.findByIdAndUpdate(filter,update)
}
const find = async()=>{
    try{
        return await RestaurantModel.find({
            isDeleted:false,
            isApproved:true
        })
    }
    catch(err){
        throw {message:"something went wrong, please try again",e:err}
    }
}

const findRestOfAllStatus = async() => {
    try{
        return await RestaurantModel.find({
            isDeleted:false
        })
    }
    catch(err){
        throw {message:"something went wrong, please try again",e:err}
    }
}

const findOne = async (filters:Partial<IRestaurant>) => {
    try {
        return await RestaurantModel.findOne({
            ...filters,
            isDeleted:false,
            isApproved:true
        })
    } catch (err) {
        throw { message: 'something went wrong', e: err } 
    } 
}

export default {create,findByIdAndUpdate,find,findOne,findRestOfAllStatus}
