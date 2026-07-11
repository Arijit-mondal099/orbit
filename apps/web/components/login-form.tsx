"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, SignInType } from "@/schema/auth";
import Link from "next/link";

async function handleSocialSignIn(provider: "google" | "github") {
  try {
    authClient.signIn.social({
      provider,
      callbackURL: "http://localhost:3000",
    });
  } catch (error) {
    const details =
      error instanceof Error ? error.message : "Failed to sign in. Please try again later.";
    toast.error(details);
  }
}

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
  });

  async function handleEmailSignIn(data: SignInType) {
    const { error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
    });

    if (error) {
      if (error.code === "INVALID_EMAIL_OR_PASSWORD") {
        setError("email", { message: "Invalid email or password" });
        setError("password", { message: "Invalid email or password" });
      } else {
        toast.error(error.message ?? "Failed to sign in. Please try again later.");
      }
      return;
    }

    toast.success("Signed in successfully");
    router.push("/");
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Link href={"/"}>
        <h1 className="font-pixel text-4xl font-bold">ORBIT</h1>
      </Link>

      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit(handleEmailSignIn)}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-xl font-semibold font-normal">Welcome back!</h1>
                <p className="text-balance text-muted-foreground">
                  Login to your account for allowing device flow
                </p>
              </div>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" type="email" placeholder="m@example.com" {...register("email")} />
                {errors.email && (
                  <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
                )}
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-destructive">{errors.password.message}</p>
                )}
              </Field>
              <Field>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Login"}
                </Button>
              </Field>
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Or continue with
              </FieldSeparator>
              <Field className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => handleSocialSignIn("github")}
                >
                  <Image
                    src={"/svgs/github.svg"}
                    alt="github"
                    width={20}
                    height={20}
                    loading="eager"
                  />
                  <span className="sr-only">Login with GitHub</span>
                </Button>

                <Button
                  variant="outline"
                  type="button"
                  onClick={() => handleSocialSignIn("google")}
                >
                  <Image
                    src={"/svgs/google.svg"}
                    alt="google"
                    width={20}
                    height={20}
                    loading="eager"
                  />
                  <span className="sr-only">Login with Google</span>
                </Button>
              </Field>
              <FieldDescription className="text-center">
                Don&apos;t have an account? <Link href="/sign-up">Sign up</Link>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className="relative hidden bg-muted md:block">
            <Image
              src="/images/login.png"
              alt="Login image"
              width={100}
              height={100}
              loading="eager"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center font-normal">
        &copy; {new Date().getFullYear()} ORBIT. All rights reserved.
      </FieldDescription>
    </div>
  );
}
