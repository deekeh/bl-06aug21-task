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

console.log(task3());
