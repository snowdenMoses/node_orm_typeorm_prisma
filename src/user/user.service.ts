import { IUserActions } from "./user.interface"
import { PrismaClient, User } from "@prisma/client"

class UserService implements IUserActions{
    private prisma;
    constructor(){
        this.prisma = new PrismaClient()
    }
    public findAllUsers = async (): Promise<User[]> =>{
        const users = await this.prisma.user.findMany({where:{isActive: true},
        include: {
            post: true
        }
        })
        return users
    }
    public findUserById = async(userId: string): Promise<User | null> =>{
        const user = await this.prisma.user?.findUnique({ where: { id: userId },
        include:{
            post:true,
        }
        })
        return user
    }
    public createUser = async(body: User): Promise<any> =>{
        const user = await this.prisma.user.create({data: body})
        return user
    }

}
export default UserService