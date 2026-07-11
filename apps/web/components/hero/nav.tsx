"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { UserButton } from "@/components/user-button";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavProps {
  links: NavLink[];
  appName: string;
}

export function Nav({ links, appName }: NavProps) {
  const { data: session, isPending } = authClient.useSession();

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-5 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-2">
        <h1 className="font-pixel text-2xl font-extrabold text-gray-700 tracking-wide">
          {appName}
        </h1>
      </div>
      <div className="hidden font-normal md:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={cn(
              "text-sm text-gray-700 hover:text-gray-900 transition-colors",
              link.label === appName && "font-medium",
            )}
          >
            {link.label}
          </a>
        ))}
      </div>
      {!isPending && session ? (
        <UserButton session={session} />
      ) : (
        <div className="flex items-center gap-3 font-pixel">
          <Link
            href="/sign-in"
            className="text-sm underline text-gray-700 hover:text-gray-900 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="text-sm text-white bg-gray-900 hover:bg-gray-800 rounded-full px-4 py-2 transition-colors"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}
