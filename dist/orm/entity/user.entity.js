"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
/* eslint-disable prettier/prettier */
const typeorm_1 = require("typeorm");
const post_entity_1 = require("./post.entity");
let User = class User extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid")
], User.prototype, "Id", void 0);
__decorate([
    (0, typeorm_1.Column)()
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)()
], User.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)()
], User.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)()
], User.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)()
], User.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)()
], User.prototype, "IsActive", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => post_entity_1.Post, post => post.user, { cascade: true })
], User.prototype, "post", void 0);
User = __decorate([
    (0, typeorm_1.Entity)({ name: "users" })
], User);
exports.User = User;
