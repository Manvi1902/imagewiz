import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: ['/anyone-can-visit-this-route'],

  ignoredRoutes: ['/no-auth-in-this-route'],
});
 
export const config = {
  
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};