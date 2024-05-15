import { describe, it, vi, expect, beforeEach } from "vitest";
import { extractPostData } from "./posts";

describe("extractPostData()", () => {
  let form;
  beforeEach(() => {
    form = {
      title: formTitle,
      content: formContent,
      get(key) {
        return this[key];
      },
    };
  });

  const formTitle = "title";
  const formContent = "content";

  it("should extract form properties", () => {
    const result = extractPostData(form);
    expect(result.title).toBe(formTitle);
    expect(result.content).toBe(formContent);
  });
});
