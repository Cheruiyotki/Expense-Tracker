import { product } from "../src/BasicUtils";

describe("BasicUtils test suite", () => {
    test("should return the product of two positive numbers", () => {
        const actual = product(3, 4);
        const expected = 12;
        expect(actual).toBe(expected);
    });
});