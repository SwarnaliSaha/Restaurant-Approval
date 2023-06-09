"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludedPaths = exports.routes = void 0;
const route_type_1 = require("./route.type");
const index_1 = __importDefault(require("../feature-modules/index"));
const middlewares_1 = require("../utility/middlewares/middlewares");
exports.routes = [
    new route_type_1.Route("/users", index_1.default.userRouter),
    new route_type_1.Route("/auth", index_1.default.authRouter),
    new route_type_1.Route("/role", index_1.default.roleRouter)
];
exports.excludedPaths = [
    new middlewares_1.ExcludedPath("/auth/Register", "POST"),
    new middlewares_1.ExcludedPath("/auth/Login", "POST")
];
