export function add(a, b) {
  return a + b;
}

add(1, 2); // output: 3

export function subtract(a, b) {
  return a - b;
}

subtract(3, 2); // output: 1

export function multiply(a, b) {
  return a * b;
}

multiply(3, 2); // output: 6

export function divide(a, b) {
  return a / b;
}

divide(6, 2); // output: 3

export function modulus(a, b) {
  return a % b;
}

modulus(6, 2); // output: 0

// Array
export const shoppingList = ['milk', 'bread', 'eggs'];

export const eatingList = ['Bakso', 'Mie Ayam', 'Nasi Goreng', 'Nasi Padang'];

// Object
export const user = {
  name: 'Arul',
  age: 24,
};

export const hero = {
  name: 'Batman',
  age: 30,
  address: 'Gotham City',
  occupation: 'Superhero',
  isMarried: true,
  hobbies: ['Reading', 'Swimming', 'Cooking'],
  skills: ['Fighting', 'Driving', 'Investigating'],
};

// promise function
export function promiseTest() {
  return new Promise((resolve, reject) => {
    resolve('Promise test'); // success
  });
}

// async function
export async function asyncTest() {
  return 'async test';
}

// async function with object
export async function asyncTestObject() {
  return {
    name: 'Arul',
    age: 24,
  };
}

// error function
export function errorTest() {
  throw new Error('Error test'); // error
}

// mocking
import axios from 'axios';
export const getUser = async (id) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  return response.data;
};

// mock function custom
// export const mockFunction = jest.fn().mockResolvedValue("mock data");

// snapshot testing
/*
    snapshot testing adalah membandingkan data sebelum dan sesudah 
*/

export const snapshotTest = (name, age) => {
  return `Hello, my name is ${name}. I am ${age} years old.`;
};

// delay function
export const delayFunction = (callback) => {
  setTimeout(callback, 1000);
};

/* Mencoba 5 macam di dokumentasi JEST*/

// Truthiness
export const truthyValue = 'arul';
export const falsyValue = '';

// Numbers
export const numberExample = (a, b) => a + b;

// Strings
export const teamName = 'The Avengers';

// Arrays and Iterables
export const favoriteFruits = ['apple', 'banana', 'orange'];

// Exceptions
export function throwErrorExample() {
  throw new Error('Custom error message!');
}
