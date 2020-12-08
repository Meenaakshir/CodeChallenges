function sum() {
  var s = 0;
  for (i = 0; i < arguments.length; i++) {
    s += arguments[i];
  }
  return s;
}

console.log(sum(2, 3)); //sum of args with any no of args//
