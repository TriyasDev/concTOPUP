import { betterAuth } from "better-auth"
import Database from "better-sqlite3"

export const auth = betterAuth({
  database: new Database("./sqlite.db"),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
    // discord: {
    //   clientId: process.env.DISCORD_CLIENT_ID!,
    //   clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    // },
    // tiktok: {
    //   clientKey: process.env.TIKTOK_CLIENT_KEY!,
    //   clientSecret: process.env.TIKTOK_CLIENT_SECRET!,
    // },
    // apple: {
    //   clientId: process.env.APPLE_CLIENT_ID!,
    //   clientSecret: process.env.APPLE_CLIENT_SECRET!,
    // },
  },
})