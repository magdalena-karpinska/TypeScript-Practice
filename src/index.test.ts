import 'mocha';
import assert from 'assert';
import { addTwoNumbers, addTwoNums } from './index';

describe('ts tests', () => {
  it('Should add two numbers together', () => {
    // arrange
    // act
    const result1 = addTwoNumbers(2, 4);
    const result2 = addTwoNumbers(10, 10);
    // assert
    assert.strictEqual(6, result1);
    assert.strictEqual(20, result2);
  });

  it('Should add two numbers together from an object', () => {
    // arrange
    const obj1 = {
      first: 1,
      second: 2,
    };

    const obj2 = {
      first: 10,
      second: 20,
    };

    // act
    const result1 = addTwoNums(obj1);
    const result2 = addTwoNums(obj2);
    // assert
    assert.strictEqual(3, result1);
    assert.strictEqual(30, result2);
  });
});
