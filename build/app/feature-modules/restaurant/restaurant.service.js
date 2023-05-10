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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const restaurant_repo_1 = __importDefault(require("./restaurant.repo"));
const restaurant_response_1 = require("./restaurant-response");
const create = (restaurant) => restaurant_repo_1.default.create(restaurant);
const findByIdAndUpdate = (filter, update) => {
    return restaurant_repo_1.default.findByIdAndUpdate(filter, update);
};
const find = () => __awaiter(void 0, void 0, void 0, function* () {
    const list = yield restaurant_repo_1.default.find();
    if (!list)
        throw restaurant_response_1.RESTAURANT_RESPONSE.RESTAURANT_NOT_FOUND;
    return list;
});
const findRestOfAllStatus = () => __awaiter(void 0, void 0, void 0, function* () {
    const list = yield restaurant_repo_1.default.findRestOfAllStatus();
    if (!list)
        throw restaurant_response_1.RESTAURANT_RESPONSE.RESTAURANT_NOT_FOUND;
    return list;
});
const findOne = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    const restaurant = yield restaurant_repo_1.default.findOne(filters);
    if (!restaurant)
        throw restaurant_response_1.RESTAURANT_RESPONSE.RESTAURANT_NOT_FOUND;
    return restaurant;
});
exports.default = { create, findByIdAndUpdate, find, findOne, findRestOfAllStatus };
