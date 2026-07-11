"use client";

import Image from "next/image";

import { Nav, type NavLink } from "./nav";
import { AppMockup } from "./app-mockup";

export interface HeroProps {
  headline?: string;
  subheadline?: string[];
  appName?: string;
  navLinks?: NavLink[];
}

const defaultNavLinks: NavLink[] = [
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "FAQ", href: "#" },
];

export function Hero({
  headline = "The evolution of workspaces",
  subheadline = [
    "A new era of productivity begins with tools that adapt to you.",
    "Experience a workspace where everything just works \u2014 effortlessly.",
  ],
  appName = "ORBIT",
  navLinks = defaultNavLinks,
}: HeroProps) {
  return (
    <section className="min-h-screen flex items-start justify-center p-4">
      <div className="w-full rounded-3xl">
        <div className="relative min-h-[calc(100vh-2rem)] overflow-hidden rounded-t-3xl">
          <Image
            src="/images/hero.png"
            alt="Mountain landscape"
            fill
            className="object-cover object-bottom rounded-3xl"
            priority
          />

          <Nav links={navLinks} appName={appName} />

          <div className="relative z-10 flex flex-col items-center justify-start pt-28 md:pt-36 px-4">
            <h1 className="font-pixel text-gray-600 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center leading-tight max-w-4xl drop-shadow-lg wrap-break-word px-2">
              {headline}
            </h1>

            <p className="text-gray-400 text-base md:text-lg font-normal text-center max-w-2xl mt-5 leading-relaxed">
              {subheadline[0]}
              <br />
              {subheadline[1]}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center px-6 pb-12 -mt-48 sm:-mt-64 md:-mt-80 lg:-mt-108">
          <AppMockup />
        </div>
      </div>
    </section>
  );
}
