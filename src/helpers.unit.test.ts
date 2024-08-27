import { expect, test } from "vitest";
import { generateKey } from "./helpers";

test("Test normal", () => {
  expect(generateKey("test", 1)).toBe("test-1");
});

// run npx vitest