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

const forBack = c(a, b);
const backFor = d(b, a);

const together = {
	forBack: c(a, b),
  backFor: d(b, a),
  both: function(){
    console.log(forBack);
    console.log(backFor);
    console.log(sentence + backFor);
    return none;
  }
}

console.log(together.both());