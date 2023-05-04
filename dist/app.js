"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ormconfig_1 = require("./orm/ormconfig");
class App {
    constructor(router) {
        this.router = router;
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || 3009;
        this.appInitializer = (router) => {
            this.app.use(express_1.default.json());
            for (let i = 0; i < router.length; i++) {
                this.app.use("/", router[i].router);
            }
            this.app.listen(this.port, () => console.log(`Listening on port ${this.port}`));
        };
        this.initializePostgresDbConnection = () => {
            try {
                ormconfig_1.dbConnection.initialize().then(e => {
                    console.log('COONECTED TO PostgresDB ');
                });
            }
            catch (_a) {
                console.log('Fail to connect to PostgresDB ');
            }
        };
        this.appInitializer(router);
        // this.initializePostgresDbConnection()
    }
}
exports.default = App;
