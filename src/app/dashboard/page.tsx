"use client"; // Needed for React Client components in Next.js

import Dashboard from "@/features/Dashboard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Page() {
  const { data: session } = useSession();

  if (!session) {
    redirect("/");
  }

  return (
    <main className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Dashboard />
    </main>
  );
}
