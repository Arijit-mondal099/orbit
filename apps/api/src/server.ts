import http from "node:http";

import app from "@/app";
import { env } from "@/config/env";
import { logger } from "@/config/logger";
import { db } from "@/config/db";

const server = http.createServer(app);

server.listen(env.PORT, () => {
  logger.info(`Server running on port ${env.PORT}`);
});

const shutdown = (signal: string): void => {
  logger.info(`Received ${signal}, shutting down gracefully`);

  server.close((err) => {
    if (err) {
      logger.error({ err }, "Error during server close");
      db.$disconnect();
      process.exit(1);
    }

    logger.info("Server closed");
    db.$disconnect();
    process.exit(0);
  });

  setTimeout(() => {
    logger.error("Forced shutdown after 10s timeout");
    db.$disconnect();
    process.exit(1);
  }, 10_000).unref();
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));

process.on("uncaughtException", (err) => {
  logger.error({ err }, "Uncaught exception");
  db.$disconnect();
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  logger.error({ err: reason }, "Unhandled promise rejection");
  db.$disconnect();
  process.exit(1);
});
