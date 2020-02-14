import { generateV1Uuid, generateV4Uuid } from "../src/generator";

describe("generator", () => {
  it("generate v1 UUID", () => {
    expect(generateV1Uuid().length).toBe(36);
  });
  it("generate v4 UUID", () => {
    expect(generateV4Uuid().length).toBe(36);
  });
});
