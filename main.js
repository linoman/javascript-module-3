function bool(input) {
  // input: truthy or falsey
  // !  -> opposite of it
  // !! -> opposite of the opposite
  return !!input;
}

// Try truthiness

console.log(1 === 2);
console.log(1 !== 2);
console.log(1);
console.log(bool(1));

console.log(bool(0)); // ->  00000000 // FALSE -> 0000000
console.log(bool(-1)); // -> 10000000

console.log()

const x = 1;
console.log(bool(x));
var y; // y = undefined
console.log(bool(y));
var z = null; // ->  00000000 // FALSE -> 0000000
console.log(bool(z));

console.log(bool(null));

console.log('spomethiong' == 'spomethiong')
console.log('spomethiong' === 'spomethiong')
