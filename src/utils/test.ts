import { appRouter } from "~/server/api/root";
import { createCallerFactory } from "~/server/api/trpc";

import { db } from "~/server/db";

export function createTestCaller() {
  return createCallerFactory(appRouter)({
    headers: new Headers(),
    db,
    session: null,
  });
}
