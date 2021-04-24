import NextAuth from "next-auth";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import makeRandom from "../../../src/makeRandom.ts";

export default NextAuth({
  providers: [],

  database: process?.env?.DATABASE_URL,
  secret: makeRandom?.(80),
});
