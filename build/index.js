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
const dotenv_1 = require("dotenv");
const app_1 = require("./app/app");
const role_type_1 = require("./app/feature-modules/role/role.type");
const auth_service_1 = __importDefault(require("./app/feature-modules/auth/auth.service"));
(0, dotenv_1.config)();
(0, app_1.startServer)();
const populateDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const admin = {
        //_id :"",
        name: "Admin",
        email: "admin@gmail.com",
        password: "admin",
        role: role_type_1.Roles.admin,
        //restaurant_name:" "
    };
    yield auth_service_1.default.register(admin);
});
populateDb();
