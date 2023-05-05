import express from "express"
class UserRoute {
    private path;
    constructor(private userController: any) {
        this.path = "/users"
        this.routeInitializer()
        

    }
    public router = express.Router()
    private routeInitializer = () =>{
        
        this.router.get(`${this.path}`, this.userController.findAllUsers)
        this.router.get(`${this.path}/:id`, this.userController.findUserById)
        this.router.post(`${this.path}/`, this.userController.createUser)
    }

}

export default UserRoute
