import express from "express"
class UserRoute {

    constructor(private userController: any) {
        this.routeInitializer()
    }
    public router = express.Router()
    private routeInitializer = () =>{
        this.router.get("/", this.userController.findAllUsers)
        this.router.get("/:id", this.userController.findUserById)
        this.router.post("/:id", this.userController.createUser)
    }
}

export default UserRoute
