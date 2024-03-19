import { db } from "~/server/db";
import { createTestCaller } from "~/test/trpc";
import { faker } from "@faker-js/faker";

describe("post.hello", () => {
  it("should return hello world", async () => {
    const trpc = createTestCaller();
    const res = trpc.post.hello({ text: "world" });
    await expect(res).resolves.toEqual({
      greeting: "Hello world",
    });
  });
});

describe("post.create", () => {
  it("should create a post", async () => {
    await db.user.create({
      data: {
        id: "user1",
        name: "Test User",
      },
    });

    const trpc = createTestCaller({
      session: {
        user: {
          id: "user1",
          name: "Test User",
        },
      },
    });
    const res = trpc.post.create({ name: "My first post" });
    await expect(res).resolves.toMatchObject({
      name: "My first post",
      createdById: "user1",
      createdAt: expect.any(Date) as Date,
      updatedAt: expect.any(Date) as Date,
    });
  });
});
