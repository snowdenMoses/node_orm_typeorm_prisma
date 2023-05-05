import express from "express"
class UserRoute {
    private path;
    constructor(private userController: any) {
        this.path = "/users"
        this.routeInitializer()
        

    }
    public router = express.Router()
    private routeInitializer = () =>{
        
        this.router.get(`/users`, this.userController.findAllUsers)
        this.router.get(`${this.path}/:id`, this.userController.findUserById)
        this.router.post(`${this.path}/:id`, this.userController.createUser)
    }

}

export default UserRoute
