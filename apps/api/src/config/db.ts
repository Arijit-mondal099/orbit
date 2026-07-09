import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";
import { env } from "@/config/env";

export const db = new PrismaClient({
  adapter: new PrismaPg({ connectionString: env.DATABASE_URL }),
  log: env.NODE_ENV === "development" ? ["query", "warn", "error"] : ["warn", "error"],
});
