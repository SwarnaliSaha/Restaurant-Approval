"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const restaurant_schema_1 = require("./restaurant.schema");
const create = (restaurant) => restaurant_schema_1.RestaurantModel.create(restaurant);
const findByIdAndUpdate = (filter, update) => {
    return restaurant_schema_1.RestaurantModel.findByIdAndUpdate(filter, update);
};
const find = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield restaurant_schema_1.RestaurantModel.find({
            isDeleted: false,
            isApproved: true
        });
    }
    catch (err) {
        throw { message: "something went wrong, please try again", e: err };
    }
});
const findRestOfAllStatus = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield restaurant_schema_1.RestaurantModel.find({
            isDeleted: false
        });
    }
    catch (err) {
        throw { message: "something went wrong, please try again", e: err };
    }
});
const findOne = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield restaurant_schema_1.RestaurantModel.findOne(Object.assign(Object.assign({}, filters), { isDeleted: false, isApproved: true }));
    }
    catch (err) {
        throw { message: 'something went wrong', e: err };
    }
});
exports.default = { create, findByIdAndUpdate, find, findOne, findRestOfAllStatus };
