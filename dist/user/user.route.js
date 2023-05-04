"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class UserRoute {
    constructor(userController) {
        this.userController = userController;
        this.router = express_1.default.Router();
        this.routeInitializer = () => {
            this.router.get("/", this.userController.findAllUsers);
            this.router.get("/:id", this.userController.findUserById);
            this.router.post("/:id", this.userController.createUser);
        };
        this.routeInitializer();
    }
}
exports.default = UserRoute;
