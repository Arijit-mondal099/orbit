"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useEffect } from "react";

export default function AuthLayou({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && session) {
      router.replace("/");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="w-full min-h-dvh flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
      </div>
    );
  }

  if (session) return null;

  return (
    <div className="w-full min-h-dvh flex flex-col items-center justify-center">{children}</div>
  );
}
