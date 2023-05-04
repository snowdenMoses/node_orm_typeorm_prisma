import express from "express"

class PostRouter {
    public router;
    constructor(private postController: any){
        this.router = express.Router()
        this.initializeRouter()
    }

    public initializeRouter = () => {
        this.router.get("/", this.postController.findMany)
        this.router.get("/:id", this.postController.findUnique)
        this.router.post("/", this.postController.create)
    }
}

export default PostRouter