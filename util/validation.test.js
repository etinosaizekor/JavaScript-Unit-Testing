import { describe, it, expect } from "vitest";
import { validateNotEmpty } from "./validation";
import { ValidationError } from "./errors";

describe("validateNotError()", () => {
  it("should throw Error if empty string is provided", () => {
    const text = "";
    expect(() => {
      validateNotEmpty(text);
    }).toThrowError();
  });

  it("should throw Error if no text is provided", () => {
    expect(() => {
      validateNotEmpty();
    }).toThrowError();
  });

  it("should throw Error that was passed to it", () => {
    const text = "";
    const errMessage = 'Error occured'
    expect(() => {
      validateNotEmpty(text, errMessage);
    }).toThrowError(errMessage);
  });

  it("should throw Error if number is provided as parameter", () => {
    const text = 1;
    const errMessage = 'Error occured'
    expect(() => {
      validateNotEmpty(text, errMessage);
    }).toThrowError();
  });

  it.each(['hello', 'hello'+'world'])("should throw not Error valid text is provided as parameter to it", (text) => {
    // const text = "Hello";
    const errMessage = 'Error occured'
    expect(() => {
      validateNotEmpty(text, errMessage);
    }).not.toThrowError();
  });
});
