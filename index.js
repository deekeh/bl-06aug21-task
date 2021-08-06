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

console.log(task5());
