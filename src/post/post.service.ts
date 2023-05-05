import { posts, PrismaClient } from "@prisma/client"
import { IPostActions } from "./post.interface";

class PostService implements IPostActions {
    private prisma;
    constructor() {
        this.prisma = new PrismaClient()
    }
    public findMany = async (): Promise<posts[]> => {
        const post: posts[] = await this.prisma.posts.findMany()
        return post
    }
    public findUnique = async (postId: number): Promise<posts | null> => {
        const post: posts | null = await this.prisma.posts?.findUnique({ where: { id: postId } })
        return post
    }
    public create = async (body: posts): Promise<any> => {
        const post: posts = await this.prisma.posts.create({ data: body })
        return post
    }

}
export default PostService