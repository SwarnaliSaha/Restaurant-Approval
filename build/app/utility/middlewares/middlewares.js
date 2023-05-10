"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcludedPath = exports.validateRole = exports.authorize = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const authorize = (excludedPaths) => {
    return (req, res, next) => {
        var _a;
        try {
            // if(excludedPaths.find(e=>e.path===req.url && e.methods===req.method)){return next()}
            const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
            if (!token)
                return next({ message: "UNAUTHORIZED", statusCode: 401 });
            const { JWT_TOKEN } = process.env;
            const result = (0, jsonwebtoken_1.verify)(token, JWT_TOKEN || "");
            console.log(result);
            res.locals.tokenInfo = result;
            next();
        }
        catch (e) {
            next({ message: "UNAUTHORIZED", statusCode: 401 });
        }
    };
};
exports.authorize = authorize;
const validateRole = (roles) => {
    return (req, res, next) => {
        try {
            const { id, role } = res.locals.tokenInfo;
            console.log(id, role);
            console.log(role.toString());
            for (let ele of roles) {
                if (ele === role.toString())
                    return next();
            }
            next({ message: "UNAUTHORIZED", statusCode: 401 });
        }
        catch (e) {
            next({ message: "Only admin is allowed to approve", statusCode: 401 });
        }
    };
};
exports.validateRole = validateRole;
class ExcludedPath {
    constructor(path, methods) {
        this.path = path;
        this.methods = methods;
    }
}
exports.ExcludedPath = ExcludedPath;
