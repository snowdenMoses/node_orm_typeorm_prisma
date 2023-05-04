
import App from "./app";
import UserService from "./user/user.service";
import UserController from "./user/user.controller";
import UserRoute from "./user/user.route";
import PostService from "./post/post.service";
import PostController from "./post/post.controller";
import PostRouter from "./post/post.route";

const userService = new UserService()
const userController = new UserController(userService)
const userRoute = new UserRoute(userController)

const postService = new PostService()
const postController = new PostController(postService)
const postRouter = new PostRouter(postController)

const app = new App([userRoute, postRouter])