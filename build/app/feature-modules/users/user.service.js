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
const user_repo_1 = __importDefault(require("./user.repo"));
const user_response_1 = require("./user-response");
const restaurant_service_1 = __importDefault(require("../restaurant/restaurant.service"));
const role_type_1 = require("../role/role.type");
const create = (user) => user_repo_1.default.create(user);
const find = () => user_repo_1.default.find();
const findOne = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_repo_1.default.findOne(filters);
    if (!user)
        throw user_response_1.USER_RESPONSE.USER_NOT_FOUND;
    return user;
});
const findByIdAndUpdate = (filter, update) => {
    return user_repo_1.default.findByIdAndUpdate(filter, update);
};
const RegisterRestaurant = (data) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userRole = yield findOne({ _id: "" + data.owner_id });
    if (((_a = userRole.role) === null || _a === void 0 ? void 0 : _a.toString()) === role_type_1.Roles.customer.toString()) {
        yield findByIdAndUpdate({ _id: userRole._id }, { $set: { role: role_type_1.Roles.owner } });
    }
    const restaurant = yield restaurant_service_1.default.create(data);
    console.log(restaurant);
    return restaurant;
});
const findRestOfAllStatus = () => __awaiter(void 0, void 0, void 0, function* () {
    const list = yield restaurant_service_1.default.findRestOfAllStatus();
    return list;
});
const ApproveRestaurant = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = { _id: id._id };
    const update = { isApproved: true };
    const restaurant = yield restaurant_service_1.default.findByIdAndUpdate(filter, update);
    console.log(filter, update);
    return restaurant;
});
//list of all the restaurants which has the approve status true
const findAllRestaurants = () => __awaiter(void 0, void 0, void 0, function* () {
    const list = yield restaurant_service_1.default.find();
    return list;
});
exports.default = { create, find, findOne, findByIdAndUpdate, RegisterRestaurant, ApproveRestaurant, findAllRestaurants, findRestOfAllStatus };
