import { postRouter } from "server/api/routers/post";
import { userRouter } from "server/api/routers/user";
import { adminRouter } from "server/api/routers/admin"; // Import the new admin router
import { createCallerFactory, createTRPCRouter } from "server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  post: postRouter,
  admin: adminRouter, // Add the admin router here
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
