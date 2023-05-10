"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantModel = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base-schema");
const RestaurantSchema = new base_schema_1.BaseSchema({
    restaurant_name: {
        type: String,
        required: true
    },
    owner_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    restaurant_location: {
        type: String,
        required: true
    },
    branch_locations: {
        type: [String],
        required: true
    },
    category: {
        type: String,
        required: true
    },
    menu: {
        type: [{ item: String, price: String }],
        required: true
    }
});
exports.RestaurantModel = (0, mongoose_1.model)("Restaurants", RestaurantSchema);
