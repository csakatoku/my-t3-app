import { db } from "~/server/db";

beforeEach(async () => {
  await db.$executeRawUnsafe("DELETE FROM Post");
  await db.$executeRawUnsafe("DELETE FROM User");
});
