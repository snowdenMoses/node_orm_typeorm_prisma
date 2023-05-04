import { DataSource } from "typeorm";
export const dbConnection = new DataSource({
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