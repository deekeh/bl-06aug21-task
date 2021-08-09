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
function task6(celcius = 0) {
  if (isNaN(celcius)) return false;
  return (celcius * (9/5)) + (32);
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

// 13. A farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals
function task13(chicken=0, cow=0, pig=0) {
  if (isNaN(chicken) || isNaN(cow) || isNaN(pig)) return false;
  return (chicken*2) + (cow*4) + (pig*4);
}

// Write some code to put these numbers in order
function numberSort(numbers = [1, 12, 2 ,23,77,7,33,5,99,234,]) {
  return numbers.sort((a,b) => a-b);
}

// check if element is present
function arraySearch(searchTerm = 'human') {
  var animals = ['dog', 'cat','cow', 'bat', 'human'];
  if (animals.indexOf(searchTerm) === -1) return `${searchTerm} not found`;
  return `${searchTerm} found at index ${animals.indexOf(searchTerm)}`;
}

// 14. How do you find the missing number in a given integer array of 1 to 100?
function task14(incompleteArray = [10, 5, 20, 15, 90, 95, 99]) {
  return [...Array(101).keys()].slice(1).filter(n => !incompleteArray.includes(n));
}

// 15. How do you find the largest and smallest number in an unsorted integer array?
function task15(input=[1,3,5,2,4,8,7,6]) {
  return [input.reduce((a=input[0], b) => (b<a ? b : a)), input.reduce((a=input[0], b) => (b>a ? b : a))]
}

// 16. How do you find all pairs of an integer array whose sum is equal to a given number?
function task16(input = 10) {
  let pairs = [];
  for (let i=0; i<=input/2; i++) pairs.push([i, input -i]);
  return pairs;
}

// 17. How do you find duplicate numbers in an array if it contains multiple duplicates?
function task17(input = [1,1,1,4,6,7,5,33,3,55,55,3]) {
  let filtered = [];
  input.forEach(n => {
    if (!filtered.includes(n)) filtered.push(n)
  });
  return filtered;
}

console.log(task17());
