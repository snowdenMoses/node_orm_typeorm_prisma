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
const client_1 = require("@prisma/client");
class PostService {
    constructor() {
        this.findMany = () => __awaiter(this, void 0, void 0, function* () {
            const post = yield this.prisma.posts.findMany();
            return post;
        });
        this.findUnique = (postId) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const post = yield ((_a = this.prisma.posts) === null || _a === void 0 ? void 0 : _a.findUnique({ where: { id: postId } }));
            return post;
        });
        this.create = (body) => __awaiter(this, void 0, void 0, function* () {
            const post = yield this.prisma.posts.create({ data: body });
            return post;
        });
        this.prisma = new client_1.PrismaClient();
    }
}
exports.default = PostService;
