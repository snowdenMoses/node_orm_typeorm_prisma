import { users } from "@prisma/client"
export interface IUserActions{
    findAllUsers(): Promise<users[]>
    findUserById(userId?: string): Promise<users | null>
    createUser(body: users): Promise<any>
}



