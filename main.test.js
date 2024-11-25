// import test from "node:test";
import { add, subtract, multiply, divide, modulus, shoppingList, eatingList, user, hero, promiseTest, asyncTest, asyncTestObject, errorTest, getUser, mockFunction, snapshotTest, delayFunction, truthyValue, falsyValue, numberExample, teamName, favoriteFruits, throwErrorExample } from './main.js';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 3 - 2 to equal 1', () => {
  expect(subtract(3, 2)).toBe(1);
});

test('multiplies 3 * 2 to equal 6', () => {
  expect(multiply(3, 2)).toBe(6);
});

test('divides 6 / 2 to equal 3', () => {
  expect(divide(6, 2)).toBe(3);
});

test('modulus 6 % 2 to equal 0', () => {
  expect(modulus(6, 2)).toBe(0);
});

// shoppingList
test('shoppingList has milk', () => {
  expect(shoppingList).toContain('milk');
});

test('check shoppingList', () => {
  const datas = ['milk', 'bread', 'eggs'];
  for (const data of datas) {
    expect(shoppingList).toContain(data);
  }
});

// eatingList
test('eatingList has Bakso and Mie Ayam', () => {
  expect(eatingList).toContain('Bakso', 'Mie Ayam');
});

test('check eatingList', () => {
  const datas = ['Bakso', 'Mie Ayam', 'Nasi Goreng', 'Nasi Padang'];
  for (const data of datas) {
    expect(eatingList).toContain(data);
  }
});

// user object
test('check user object', () => {
  expect(user).toMatchObject({
    name: 'Arul',
    age: 24,
  });
});

// hero object
test('check hero object', () => {
  expect(hero).toMatchObject({
    name: 'Batman',
    age: 30,
    address: 'Gotham City',
    occupation: 'Superhero',
    isMarried: true,
    hobbies: ['Reading', 'Swimming', 'Cooking'],
    skills: ['Fighting', 'Driving', 'Investigating'],
  });
});

// promiseTest
test('testing promise test', () => {
  expect(promiseTest()).resolves.toBe('Promise test');
});

test('testing promise test part 2', () => {
  return promiseTest().then((res) => expect(res).toBe('Promise test'));
});

// asyncTest
test('testing async test', async () => {
  expect(await asyncTest()).toBe('async test');
});

test('testing async test part 2', async () => {
  const res = await asyncTest();
  expect(res).toBe('async test');
});

/// asyncTestObject
test('testing async test object', async () => {
  const res = await asyncTestObject();
  expect(res).toMatchObject({
    name: 'Arul',
    age: 24,
  });
});

// errorTest
test('testing error test', () => {
  expect(() => errorTest()).toThrow('Error test');
});

// getUser mocking
jest.mock('axios'); // mock axios / palsukan axios
import axios from 'axios';

axios.get.mockResolvedValue({
  data: {
    name: 'Arul',
    age: 24,
  },
});

test('test mocking user data', async () => {
  const user = await getUser(1);
  expect(user.name).toBe('Arul');
});

// // mock function
// test("fetch mock data", async () => {
//   const res = await mockFunction();
//   expect(res).toBe("mock data");
// });


// snapshot test
test("snapshot testing", () => {
  expect(snapshotTest("Arul", 24)).toMatchSnapshot();
})

// delay function
jest.useFakeTimers();
test("delay function", () => {
  const mockCallback = jest.fn();
  delayFunction(mockCallback);
  jest.advanceTimersByTime(1000);
  expect(mockCallback).toHaveBeenCalledTimes(1);
})

/* Mencoba 5 macam di dokumentasi JEST*/

// Truthiness
test('truthiness test for values', () => {
  expect(truthyValue).toBeTruthy();
  // Berhasil jika nilai falsyValue adalah falsy (contoh: 0, null, string kosong).
  expect(falsyValue).toBeFalsy();
});

// Numbers
test('number comparison test', () => {
  const result = numberExample(3, 5);
  expect(result).toBeGreaterThan(7);
  expect(result).toBeGreaterThanOrEqual(8);
  expect(result).toBeLessThan(10);
  expect(result).toBe(8);
});

// Strings
test('string pattern matching test', () => {
  // Berhasil jika "I" tidak ditemukan dalam teamName.
  expect(teamName).not.toMatch(/I/);
  expect(teamName).toMatch(/Avengers/);
});

// Arrays and Iterables
test('array contains specific item', () => {
  // Berhasil jika 'banana' ada di dalam array favoriteFruits.
  expect(favoriteFruits).toContain('banana');
  // Berhasil jika 'orange' ada di dalam Set favoriteFruits.
  expect(new Set(favoriteFruits)).toContain('orange');
  console.log(favoriteFruits);
});

// Exceptions
test('error throwing test', () => {
  // Berhasil jika fungsi melempar error.
  expect(() => throwErrorExample()).toThrow();
  // Berhasil jika pesan error cocok.
  expect(() => throwErrorExample()).toThrow('Custom error message!');
  // Berhasil jika pesan error mengandung kata "error message".
  expect(() => throwErrorExample()).toThrow(/error message/);
});
