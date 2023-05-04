import { Post, PrismaClient } from "@prisma/client"
import { IPostActions } from "./post.interface";

class PostService implements IPostActions {
    private prisma;
    constructor() {
        this.prisma = new PrismaClient()
    }
    public findMany = async (): Promise<Post[]> => {
        const post: Post[] = await this.prisma.post.findMany()
        return post
    }
    public findUnique = async (postId: number): Promise<Post | null> => {
        const post: Post | null = await this.prisma.post?.findUnique({ where: { id: postId } })
        return post
    }
    public create = async (body: Post): Promise<any> => {
        const post: Post = await this.prisma.post.create({ data: body })
        return post
    }

}
export default PostService