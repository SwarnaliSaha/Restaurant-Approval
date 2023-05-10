"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.Roles = {
    admin: new mongoose_1.default.mongo.ObjectId("64129e3203db3e9d36740aa5"),
    owner: new mongoose_1.default.mongo.ObjectId("6412a0aa03db3e9d36740aab"),
    customer: new mongoose_1.default.mongo.ObjectId("6413eb1caf843ed5f14fcd43")
};
