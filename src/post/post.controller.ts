import { posts } from "@prisma/client";
import e, { Request, Response } from "express";
import { IPostActions } from "./post.interface";

class PostController{
    constructor(private postService: IPostActions){

    }

    public findMany = async(req: Request, res: Response) => {
        try{
            const post: posts[] = await this.postService.findMany()
            res.status(200).json(post)
        }
        catch(e){
            console.log(e)
        }
    }
    public findUnique = async(req: Request, res: Response) => {
        try{
            const { id } = req.params
            const post: posts | null = await this.postService.findUnique(Number(id))
            res.status(200).json(post)
        }
        catch(e){
            console.log(e)
        }
    }
    public create = async(req: Request, res: Response) => {
        try{
            const body = req.body
            const post: posts = await this.postService.create(body)
            res.status(200).json(post)
        }
        catch(e){
            console.log(e)
        }
    }
}

export default PostController