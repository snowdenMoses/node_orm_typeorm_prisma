import express from "express"

class PostRouter {
    public router;
    private path;
    constructor(private postController: any){
        this.router = express.Router()
        this.path = "/posts"
        this.initializeRouter()
       

    }

    public initializeRouter = () => {
        this.router.get(`${this.path}/`, this.postController.findMany)
        this.router.get(`${this.path}/:id`, this.postController.findUnique)
        this.router.post(`${this.path}/`, this.postController.create)
    }
}

export default PostRouter