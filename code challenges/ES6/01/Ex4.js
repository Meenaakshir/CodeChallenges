"use strict";

var a = 5,
  b = 10;

if (b > a) {
  let c = 2; //declaration before adding c with a and b (in the quest let c =2 was after c=a+b+c)
  c = a + b + c;

  console.log(c);
}
console.log(c);
