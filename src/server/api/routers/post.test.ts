import { createTestCaller } from "~/utils/test";

describe("post.hello", () => {
  it("should return hello world", async () => {
    const trpc = createTestCaller();
    const res = trpc.post.hello({ text: "world" });
    await expect(res).resolves.toEqual({
      greeting: "Hello world",
    });
  });
});
