"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <h1 className="font-pixel text-6xl md:text-8xl text-gray-600">Oops!</h1>
        <p className="font-pixel text-xl md:text-2xl text-gray-700 mt-4">Something went wrong</p>
        <p className="font-normal text-muted-foreground mt-3 leading-relaxed">
          An unexpected error occurred. Please try again, or refresh the page.
        </p>
        <Button onClick={reset} className="mt-8 font-pixel">
          Retry
        </Button>
      </div>
    </div>
  );
}
