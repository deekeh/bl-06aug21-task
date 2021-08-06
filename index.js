// 1. Given a string, reverse each word in the sentence.
function task1(message = 'Hello World') {
  const words = message.split(' ');
  let reversedWords = [];
  for (word of words) {
    reversedWords.push(word.split('').reverse().join(''));
  }
  return reversedWords.join(' ');
}

// 2. Print numbers from 1 to 10
function task2(start=1, end=10) {
  let numbers = [];
  for (let i=start; i<=end; i++) numbers.push(i);
  return numbers.join(", ");
}

// 3. Print the odd numbers less than 100
function task3(end=100) {
  let oddNumbers = [];
  for (let i=0; i<end; i++)
    if (i%2 != 0) oddNumbers.push(i);
    return oddNumbers.join(", ");
}

// 4. Print the multiplication table with 7
function task4(tableNumber=7) {
  let tableString = '';
  for (let i=1; i<=10; i++) tableString += `${tableNumber} * ${i} = ${tableNumber*i}\n`;
  return tableString;
}

// 5. Calculate 10!
function task5(factorialNumber = 10) {
  let factorial = 1;
  for (let i=1; i<=factorialNumber; i++) factorial *= i;
  return factorial;
}

// 6. Create a function that will convert from Celsius to Fahrenheit
function task6(fahrenheit = 32) {
  if (isNaN(fahrenheit)) return false;
  return (fahrenheit - 32) * (5/9);
}

// 7. Calculate the sum of numbers in an array of numbers
function task7(numberArray = [1,2,3,4]) {
  return numberArray.reduce((a=0, b) => a+b);
}

// 8. Create a function that receives an array of numbers and returns an array containing only the positive numbers
function task8(numberArray = [-1,-2,3,4]) {
  return numberArray.filter(n => n>0);
}

// 9. Find the maximum number in an array of numbers
function task9(numbers=[4,5,3,6]) {
  let maxNumber = numbers[0];
  for (let i=0; i<numbers.length; i++) {
    if(isNaN(numbers[i])) return false;
    if (numbers[i] > maxNumber) maxNumber = numbers[i];
  }
  return maxNumber;
}

// 10. Create a function that will return a Boolean specifying if a number is prime
function task10(n=10) {
  for (let i=2; i<n/2; i++) if (n%i==0) return false;
  return true;
}

// 11. JAVASCRIPT PALINDROME CHECKER
function task11(input='') {
  if (input.toString().split("").reverse().join("") === input.toString()) return true;
  return false;
}

// 12. Create a function that takes voltage and current and returns the calculated power.
function task12(voltage=0, current=0) {
  if(isNaN(voltage) || isNaN(current)) return false;
  return voltage*current;
}

console.log(task12());
