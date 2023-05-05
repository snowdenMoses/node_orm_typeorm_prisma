import { posts } from "@prisma/client"
export interface IPostActions{
   findMany(): Promise<posts[]>
   findUnique(postId: number): Promise<posts | null>
   create(body: posts): Promise<posts>
}

