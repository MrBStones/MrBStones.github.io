/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {  /**
    * Enable static exports.
    *
    * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
    */
   output: "export",
 
   /**
    * Set base path. This is the slug of your GitHub repository.
    *
    * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
    */
   basePath: "/MrBStones.github.io",
 
   /**
    * Disable server-based image optimization. Next.js does not support
    * dynamic features with static exports.
    *
    * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
    */
   images: {
     unoptimized: true,
   },
  
   env: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_DISCORD_ID: process.env.AUTH_DISCORD_ID,
    AUTH_DISCORD_SECRET: process.env.AUTH_DISCORD_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
  },
  };


export default config;
