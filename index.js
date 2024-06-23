// 1- Write a function named "calculateSum" that takes two arguments and returns their sum.
const calculateSum = (num1, num2) => {
  let sum = num1 + num2;
  return sum;
};
const sumResult = calculateSum(10, 30);
console.log(sumResult);

// 2- Write a function named "isEven" that takes one argument and returns true if the number is even, and false otherwise.
const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
const checkEven = isEven(24);
console.log(checkEven);

// 3- Write a function named "findMax" that takes an array of numbers and return the largest number in the array.
const numbers = [10, 33, 81, 53, 40, 87, 100];
const findMax = (numbers) => {
  const maxNumber = Math.max(...numbers);
  return maxNumber;
};
const checkMaxNumber = findMax(numbers);
console.log(checkMaxNumber);

// 4- Write a function named "reverseString" that takes a string and return the string reversed.
const string = "javaScript";
const reverseString = (string) => {
  const reversedArr = string.split("").reverse();
  const reversedStr = reversedArr.join("");
  return reversedStr;
};
const reverseStringResult = reverseString(string);
console.log(reverseStringResult);

// 5- Write a function named "filterOddNumbers" that takes an array of number and returns a new array containing only the odd numbers.
const filterOddNumbers = (numbers) => {
  let filteredNumber = numbers.filter((number) => {
    if (number % 2 !== 0) {
      return number;
    }
  });
  return filteredNumber;
};
const chackOddNumber = filterOddNumbers(numbers);
console.log(chackOddNumber);

// 6- Write a function named "sumArray" that takes an array of numbers and returns the sum of all elements.
const sumArray = (numbers) => {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  return sum;
};
const sumArrayResult = sumArray(numbers);
console.log(sumArrayResult);

// 7- Write a function named "sortArray" that takes an array of numbers and returns a new array sorted in ascending order.
const sortArray = (numbers) => {
  let sortedNumber = numbers.sort((a, b) => {
    return a - b;
  });
  return sortedNumber;
};
const sortArrayResult = sortArray(numbers);
console.log(sortArrayResult);

// 8- Write a function named "capitalizeFirstLetter" that takes a string and returns the same string with first letter capitilized.
const capitalizeFirstLetter = (string) => {
  const capitalizeLetter = string[0].toUpperCase();
  const capitalizeStr = string.replace(string[0], capitalizeLetter);
  return capitalizeStr;
};
const capitalizeStrResult = capitalizeFirstLetter(string);
console.log(capitalizeStrResult);
