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
            this.router.get("/", this.postController.findMany);
            this.router.get("/:id", this.postController.findUnique);
            this.router.post("/", this.postController.create);
        };
        this.router = express_1.default.Router();
        this.initializeRouter();
    }
}
exports.default = PostRouter;
