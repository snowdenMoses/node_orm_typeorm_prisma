import { User } from "@prisma/client"
import express, {Response, Request} from "express"
import { IUserActions } from "./user.interface"

class UserController{
    constructor(private userService: IUserActions){
    }

    public findAllUsers = async (req: Request, res:Response)=>{
        const users: User[] = await this.userService.findAllUsers()
        res.status(200).json(users)
    }
    public findUserById = async (req: Request, res:Response)=>{
        const { id } = req.params
        const user = await this.userService.findUserById(id)
        res.status(200).json(user)
    }
    public createUser = async (req: Request, res:Response)=>{
        const user = await this.userService.createUser(req.body)
        res.status(200).json(user)
    }
}

export default UserController