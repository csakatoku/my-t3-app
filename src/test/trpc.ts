import { appRouter } from "~/server/api/root";
import { createCallerFactory } from "~/server/api/trpc";
import { type Session } from "next-auth";

import { db } from "~/server/db";

export function createTestCaller(opts?: { session: Omit<Session, "expires"> }) {
  const session = opts?.session
    ? {
        ...opts.session,
        expires: "2034-01-01T00:00:00Z",
      }
    : null;

  return createCallerFactory(appRouter)({
    headers: new Headers(),
    db,
    session,
  });
}
