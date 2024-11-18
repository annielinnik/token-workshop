import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma-client";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Crypto Wallet",
      credentials: {
        walletAddress: { label: "Wallet Address", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("No credentials provided");
        }
        const user = await prisma.user.findUnique({
          where: { walletAddress: credentials.walletAddress },
        });

        if (!user) {
          const newUser = await prisma.user.create({
            data: {
              walletAddress: credentials.walletAddress,
            },
          });
          return newUser;
        }
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      // Attach walletAddress to the session
      if (session.user) {
        session.user.walletAddress = token.walletAddress as string;
        session.user.id = token.id as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.walletAddress = user.walletAddress as string;
        token.id = user.id as string;
      }
      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
});

export { handler as GET, handler as POST };
