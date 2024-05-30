import "mocha";
import assert from "assert";
import { addTwoNumbers } from "./index";

describe("ts tests", () => {
    it("Should add two numbers together", () => {
        // arrange
        // act
        const result1 = addTwoNumbers(2, 4);
        const result2 = addTwoNumbers(10, 10);
        // assert
        assert.strictEqual(6, result1);
        assert.strictEqual(20, result2);
    });
});