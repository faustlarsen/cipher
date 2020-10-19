let sentence = prompt("Type a sentence");
console.log(sentence);

let a = sentence.charAt(0).toUpperCase();
let b = sentence.charAt(sentence.length-1).toUpperCase();

function c(a, b) {
  return a + b;
}

function d(b, a) {
  return b + a;
}

const forwardBackward = c(a, b);
const backwardForward = d(b, a);
console.log(forwardBackward);
console.log(backwardForward);