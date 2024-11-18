"use client"; // Needed for React Client components in Next.js

import { LoginButton } from "@/components/Button";
import { Spinner } from "@/components/Spinner";
import { connectWallet } from "@/utils/metamask-provider";
import { useSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";

async function handleSignIn() {
  try {
    const walletAddress = await connectWallet(); // Connect wallet and get address
    if (walletAddress) {
      // Trigger NextAuth sign-in with the wallet address
      const res = await signIn("credentials", {
        walletAddress: walletAddress,
        redirect: false,
      });

      if (res?.error) {
        console.error("Sign-in error:", res.error);
      } else {
        console.log("Sign-in success:", res);
      }
    }
  } catch (error) {
    console.error("Error connecting wallet:", error);
  }
}

export default function Home() {
  const { data: session, status } = useSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {status === "loading" ? (
          <Spinner />
        ) : (
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <h1>You are not logged in</h1>
            <LoginButton onClick={handleSignIn} color="primary">
              Sign in
            </LoginButton>
          </div>
        )}
      </div>
    </main>
  );
}
