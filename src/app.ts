import express from "express"
import { dbConnection } from "./orm/ormconfig"


class App{
    private app = express()
    private port = process.env.PORT || 3009

    constructor (private router: any){
        this.appInitializer(router)
        // this.initializePostgresDbConnection()
    }

    public appInitializer = (router: any) => {
        this.app.use(express.json())
        for (let i = 0; i < router.length; i++) {
            this.app.use("/", router[i].router)
        }
        this.app.listen(this.port, () => console.log(`Listening on port ${this.port}`))
    }

    private initializePostgresDbConnection = () => {
        try{
            dbConnection.initialize().then(e => {
            console.log('COONECTED TO PostgresDB ');
        });
        }catch{
                console.log('Fail to connect to PostgresDB ');
        }
    }
}

export default App

