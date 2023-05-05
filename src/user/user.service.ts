import { IUserActions } from "./user.interface"
import { PrismaClient, users } from "@prisma/client"

class UserService implements IUserActions{
    private prisma;
    constructor(){
        this.prisma = new PrismaClient()
    }
    public findAllUsers = async (): Promise<users[]> =>{
        const users = await this.prisma.users.findMany({where:{isactive: true},
        include: {
            post: true
        }
        })
        return users
    }
    public findUserById = async(userId: string): Promise<users | null> =>{
        const user = await this.prisma.users?.findUnique({ where: { id: userId },
        include:{
            post:true,
        }
        })
        return user
    }
    public createUser = async(body: users): Promise<any> =>{
        const user = await this.prisma.users.create({data: body})
        return user
    }

}
export default UserService