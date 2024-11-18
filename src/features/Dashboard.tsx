import { signOut, useSession } from "next-auth/react";
import { LoginButton } from "@/components/Button";

import { TokenList } from "./TokenList/TokenList";
import { TokenListContextProvider } from "./TokenList/useTokenList";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <>
      <header
        style={{
          background: "white",
          filter: "drop-shadow(0px 1px 0px #E2E8F0)",
          padding: "1rem",
          boxShadow: "0 0 #0000,  0 0 #0000, 0px 1px 4px rgba(0, 0, 0, 0.12)",
        }}
      >
        <div
          className="flex gap-4 flex-row items-center sm:flex-row"
          style={{
            justifyContent: "space-between",
          }}
        >
          <h1>Welcome, {session?.user.walletAddress}!</h1>
          <LoginButton onClick={() => signOut()} color="secondary">
            Sign out
          </LoginButton>
        </div>
      </header>
      <div style={{ padding: 24 }}>
        <TokenListContextProvider>
          <TokenList />
        </TokenListContextProvider>
      </div>
    </>
  );
}
