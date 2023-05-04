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
class UserService {
    constructor() {
        this.findAllUsers = () => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.prisma.user.findMany({ where: { isActive: true },
                include: {
                    post: true
                }
            });
            return users;
        });
        this.findUserById = (userId) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const user = yield ((_a = this.prisma.user) === null || _a === void 0 ? void 0 : _a.findUnique({ where: { id: userId },
                include: {
                    post: true,
                }
            }));
            return user;
        });
        this.createUser = (body) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.prisma.user.create({ data: body });
            return user;
        });
        this.prisma = new client_1.PrismaClient();
    }
}
exports.default = UserService;
