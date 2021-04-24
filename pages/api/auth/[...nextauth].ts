import NextAuth from "next-auth";

export default NextAuth({
  providers: [],

  database: process.env.DATABASE_URL,
});
