import 'mocha';
import assert from 'assert';
import { addTwoNumbers, addTwoNums, getName, getName2, getUserId, defaultUser, makeUser, defaultUser2, guitarists } from './index';

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

  it('Should work with just the first name', () => {
    // arrange
    // act
    const name1 = getName({
      first: 'Matt',
    });
    // assert
    assert.strictEqual('Matt', name1);
  });

  it('Should work with both names', () => {
    // arrange
    // act
    const name2 = getName({
      first: 'Matt',
      last: 'Dude',
    });
    // assert
    assert.strictEqual('Matt Dude', name2);
  });

  it('Should work with only the first name as param', () => {
    // arrange
    // act
    const firstName = getName2('Matt');
    const bothNames = getName2('Matt', 'Dude');
    // assert
    assert.strictEqual('Matt', firstName);
    assert.strictEqual('Matt Dude', bothNames);
  });

  it('Should get the user ID', () => {
    // arrange
    // act
    const id = getUserId(defaultUser);
    // asssert
    assert.strictEqual(id, 1);
  });

  it('Should return a valid user', () => {
    // arrange
    // act
    const user = makeUser();
    // assert
    assert.strictEqual(typeof user.id, 'number');
    assert.strictEqual(typeof user.firstName, 'string');
    assert.strictEqual(typeof user.lastName, 'string');
    assert.strictEqual(typeof user.role, 'string');
    assert.strictEqual(typeof user.posts[0].id, 'number');
    assert.strictEqual(typeof user.posts[0].title, 'string');
  });

  it('Should contain Jimi and Eric', () => {
    // arrange
    // act
    const jimi = guitarists.has('Jimi Hendrix');
    const eric = guitarists.has('Eric Clapton');
    //assert
    assert.strictEqual(jimi, true);
    assert.strictEqual(eric, true);
  });
});
