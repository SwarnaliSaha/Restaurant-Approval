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
const bcryptjs_1 = require("bcryptjs");
const user_service_1 = __importDefault(require("../users/user.service"));
const role_type_1 = require("../role/role.type");
const auth_responses_1 = require("./auth.responses");
const jsonwebtoken_1 = require("jsonwebtoken");
const encryptedPassword = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield (0, bcryptjs_1.genSalt)(10);
    const hashedPassword = yield (0, bcryptjs_1.hash)(user.password, salt);
    user.password = hashedPassword;
    return user;
});
const register = (user) => __awaiter(void 0, void 0, void 0, function* () {
    user = yield encryptedPassword(user);
    if (!user.role && user.restaurant_name)
        user.role = role_type_1.Roles.owner;
    if (!user.role && !user.restaurant_name)
        user.role = role_type_1.Roles.customer;
    let record = yield user_service_1.default.create(user);
    return record;
});
const login = (credential) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_service_1.default.findOne({ email: credential.email });
    if (!user)
        throw auth_responses_1.AUTH_RESPONSES.INVALID_USER_CREDENTIALS;
    const isPasswordValid = yield (0, bcryptjs_1.compare)(credential.password, user.password);
    if (!isPasswordValid)
        throw auth_responses_1.AUTH_RESPONSES.INVALID_USER_CREDENTIALS;
    const { JWT_TOKEN } = process.env;
    console.log(JWT_TOKEN);
    const { _id, role } = user;
    const token = (0, jsonwebtoken_1.sign)({ id: _id, role: role }, JWT_TOKEN || "");
    return { token };
});
exports.default = { register, login };
