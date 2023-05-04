"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const user_service_1 = __importDefault(require("./user/user.service"));
const user_controller_1 = __importDefault(require("./user/user.controller"));
const user_route_1 = __importDefault(require("./user/user.route"));
const post_service_1 = __importDefault(require("./post/post.service"));
const post_controller_1 = __importDefault(require("./post/post.controller"));
const post_route_1 = __importDefault(require("./post/post.route"));
const userService = new user_service_1.default();
const userController = new user_controller_1.default(userService);
const userRoute = new user_route_1.default(userController);
const postService = new post_service_1.default();
const postController = new post_controller_1.default(postService);
const postRouter = new post_route_1.default(postController);
const app = new app_1.default([userRoute, postRouter]);
