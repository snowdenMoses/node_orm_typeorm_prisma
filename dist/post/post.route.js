"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class PostRouter {
    constructor(postController) {
        this.postController = postController;
        this.initializeRouter = () => {
            this.router.get(`${this.path}/`, this.postController.findMany);
            this.router.get(`${this.path}/:id`, this.postController.findUnique);
            this.router.post(`${this.path}/`, this.postController.create);
        };
        this.router = express_1.default.Router();
        this.path = "/posts";
        this.initializeRouter();
    }
}
exports.default = PostRouter;
