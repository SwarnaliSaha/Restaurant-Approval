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
const express_1 = require("express");
const user_service_1 = __importDefault(require("./user.service"));
const middlewares_1 = require("../../utility/middlewares/middlewares");
const route_data_1 = require("../../routes/route.data");
const response_handler_1 = require("../../utility/response-handler");
const router = (0, express_1.Router)();
//ONLY REGISTERED AND LOGGED IN OWNER CAN REGISTER THEIR RESTAURANTS6412a0aa03db3e9d36740aab
router.post('/RegisterRestaurant', (0, middlewares_1.authorize)(route_data_1.excludedPaths), (0, middlewares_1.validateRole)(["6413eb1caf843ed5f14fcd43"]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restaurantData = req.body;
        const result = yield user_service_1.default.RegisterRestaurant(restaurantData);
        const data = yield result.save();
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
//ADMIN GETS THE LIST OF ALL THE RESTAURANT IRRESPECTIVE OF THEIR APPROVAL STATUS
router.get('/GetCompleteList', (0, middlewares_1.authorize)(route_data_1.excludedPaths), (0, middlewares_1.validateRole)(["64129e3203db3e9d36740aa5"]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.default.findRestOfAllStatus();
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
//ADMIN CAN APPROVE ANY REGISTERED RESTAURANT WITH THE RESTAURANT ID
router.post('/ApproveRestaurant', (0, middlewares_1.authorize)(route_data_1.excludedPaths), (0, middlewares_1.validateRole)(["64129e3203db3e9d36740aa5"]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restId = req.body;
        const result = yield user_service_1.default.ApproveRestaurant(restId);
        const data = yield (result === null || result === void 0 ? void 0 : result.save());
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
//Third party user who wants to check the list of all approved restaurants
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.default.findAllRestaurants();
        res.send(new response_handler_1.ResponseHandler(result));
    }
    catch (e) {
        next(e);
    }
}));
exports.default = router;
