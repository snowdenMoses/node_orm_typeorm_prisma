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
class PostController {
    constructor(postService) {
        this.postService = postService;
        this.findMany = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const post = yield this.postService.findMany();
                res.status(200).json(post);
            }
            catch (e) {
                console.log(e);
            }
        });
        this.findUnique = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const post = yield this.postService.findUnique(Number(id));
                res.status(200).json(post);
            }
            catch (e) {
                console.log(e);
            }
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const post = yield this.postService.create(body);
                res.status(200).json(post);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.default = PostController;
