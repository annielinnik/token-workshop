import { User as PrismaUser } from "@prisma/client";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  /**
   * TypeScript are merged with initial next-auth types
   */

  interface User
    extends Omit<
      DefaultSession["user"] & PrismaUser,
      "email" | "image" | "name"
    > {}

  interface Session {
    user: User;
    id_token?: string | undefined | null;
  }

  interface JWT {
    walletAddress?: string;
  }
}

declare global {
  interface Window {
    ethereum?: import("ethers").providers.ExternalProvider;
  }
}
