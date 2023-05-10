import { Schema, model } from "mongoose";
import { BaseSchema } from "../../utility/base-schema";
import { IRestaurant } from "./restaurant.type";

const RestaurantSchema = new BaseSchema({
    restaurant_name: {
        type:String,
        required:true
    },
    owner_id: {
        type:Schema.Types.ObjectId,
        ref: "users",
        required:true
    },
    restaurant_location: {
        type:String,
        required:true
    },
    branch_locations: {
        type:[String],
        required:true
    },
    category: {
        type:String,
        required: true
    },
    menu: {
        type:[{item:String,price:String}],
        required: true
    }
}
)

type RestaurantDocument = Document & IRestaurant;
export const RestaurantModel = model<RestaurantDocument>("Restaurants",RestaurantSchema);