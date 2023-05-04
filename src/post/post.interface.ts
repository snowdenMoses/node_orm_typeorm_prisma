import { Post } from "@prisma/client"
export interface IPostActions{
   findMany(): Promise<Post[]>
   findUnique(postId: number): Promise<Post | null>
   create(body: Post): Promise<Post>
}

