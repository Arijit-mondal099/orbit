import { z } from "zod";

export const signInSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(8, { error: "Password must be 8 characters long" })
    .max(16, { error: "Password must be under 16 characters long" }),
});

export const signUpSchema = z
  .object({
    name: z.string().min(1, { error: "Name is required" }),
    email: z.email(),
    password: z
      .string()
      .min(8, { error: "Password must be 8 characters long" })
      .max(16, { error: "Password must be under 16 characters long" }),
    confirmPassword: z.string().min(1, { error: "Confirm password is required!" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignInType = z.infer<typeof signInSchema>;
export type SignUpType = z.infer<typeof signUpSchema>;
