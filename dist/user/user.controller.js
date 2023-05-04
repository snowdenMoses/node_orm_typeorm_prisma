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
class UserController {
    constructor(userService) {
        this.userService = userService;
        this.findAllUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.findAllUsers();
            res.status(200).json(users);
        });
        this.findUserById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield this.userService.findUserById(id);
            res.status(200).json(user);
        });
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.createUser(req.body);
            res.status(200).json(user);
        });
    }
}
exports.default = UserController;
