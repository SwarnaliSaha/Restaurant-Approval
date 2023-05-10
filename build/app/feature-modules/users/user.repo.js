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
const user_schema_1 = require("./user.schema");
const create = (user) => user_schema_1.UserModel.create(user);
const find = () => user_schema_1.UserModel.find();
const findOne = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("in repo");
    try {
        return yield user_schema_1.UserModel.findOne(Object.assign(Object.assign({}, filters), { isDeleted: false }));
    }
    catch (err) {
        throw { message: 'something went wrong', e: err };
    }
});
const findByIdAndUpdate = (filter, update) => {
    return user_schema_1.UserModel.findByIdAndUpdate(filter, update);
};
exports.default = { create, find, findOne, findByIdAndUpdate };
