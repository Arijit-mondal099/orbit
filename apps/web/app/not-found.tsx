import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <h1 className="font-pixel text-8xl md:text-9xl text-gray-600">404</h1>
        <p className="font-pixel text-xl md:text-2xl text-gray-700 mt-2">Page not found</p>
        <p className="font-normal text-muted-foreground mt-3 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "default" }), "mt-8 font-pixel inline-flex")}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
