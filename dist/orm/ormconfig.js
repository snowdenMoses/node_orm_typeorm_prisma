"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const typeorm_1 = require("typeorm");
exports.dbConnection = new typeorm_1.DataSource({
    type: 'postgres',
    port: 5432,
    host: 'localhost',
    username: 'snowdenmoses',
    password: 'snowdenmoses',
    database: 'postgres',
    logging: ['error'],
    entities: ['entity/**/*.entity{.ts,.js}'],
    migrations: ['migration/**/*.migration{.ts,.js}'],
});
