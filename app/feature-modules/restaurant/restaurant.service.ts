import { FilterQuery, UpdateQuery } from "mongoose";
import restaurantRepo from "./restaurant.repo";
import { IRestaurant } from "./restaurant.type";
import { RESTAURANT_RESPONSE } from "./restaurant-response";

const create = (restaurant:IRestaurant)=>restaurantRepo.create(restaurant);

const findByIdAndUpdate = (filter:FilterQuery<IRestaurant>,update:UpdateQuery<IRestaurant>) =>{
    return restaurantRepo.findByIdAndUpdate(filter,update)
}
const find = async () => {
    const list = await restaurantRepo.find();
    if(!list) throw RESTAURANT_RESPONSE.RESTAURANT_NOT_FOUND

    return list;
}

const findRestOfAllStatus = async () => {
    const list = await restaurantRepo.findRestOfAllStatus();
    if(!list) throw RESTAURANT_RESPONSE.RESTAURANT_NOT_FOUND;

    return list;
}
const findOne = async (filters:Partial<IRestaurant>) => {
    const restaurant = await restaurantRepo.findOne(filters);
    if(!restaurant) throw RESTAURANT_RESPONSE.RESTAURANT_NOT_FOUND
    
    return restaurant;
}

export default {create,findByIdAndUpdate,find,findOne,findRestOfAllStatus}