import { ObjectId } from "mongoose"

export interface IRestaurant {
    _id ?:string,
    restaurant_name:string,
    owner_id:ObjectId,
    restaurant_location:string,
    branch_locations:string[],
    category:string,
    menu:IMenu[]
}
interface IMenu {
    item:string,
    price:string
}

export interface IRestCred{
    _id:ObjectId
}