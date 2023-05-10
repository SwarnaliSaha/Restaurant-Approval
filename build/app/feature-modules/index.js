"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_router_1 = __importDefault(require("./users/user.router"));
const auth_router_1 = __importDefault(require("./auth/auth.router"));
const role_router_1 = __importDefault(require("./role/role.router"));
//import restaurantRouter from "./restaurant/restaurant.router"
exports.default = { userRouter: user_router_1.default, authRouter: auth_router_1.default, roleRouter: role_router_1.default };
