/*
 * when you look at it the for loop is O(n) and the charCodeAt is O(1)
 * the for loop has to excecute the length of the string
 * so if our string grows by 50% for example the for loop will have to excecute 50% more which means it would be `50%` slower
 * it grows linearly, for every one more unit of string there is one more iteration to be ran
 * Simplest way to think about it is if you have a string of 10 characters and you add 1 more character to it, you have to do 1 more iteration
 * */

function sumCharCodes(n: string) {
  let sum = 0;

  for (let i = 0; i < n.length; i++) {
    sum += n.charCodeAt(i);
  }

  return sum;
}

console.log(sumCharCodes("abc"));
