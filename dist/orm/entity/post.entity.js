"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
/* eslint-disable prettier/prettier */
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let Post = class Post extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid")
], Post.prototype, "Id", void 0);
__decorate([
    (0, typeorm_1.Column)()
], Post.prototype, "post_details", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)()
], Post.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)()
], Post.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.post, { cascade: true })
], Post.prototype, "user", void 0);
Post = __decorate([
    (0, typeorm_1.Entity)({ name: "posts" })
], Post);
exports.Post = Post;
