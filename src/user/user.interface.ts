import { User } from "@prisma/client"
export interface IUserActions{
    findAllUsers(): Promise<User[]>
    findUserById(userId? : string): Promise<User | null>
    createUser(body: User): Promise<any>
}



