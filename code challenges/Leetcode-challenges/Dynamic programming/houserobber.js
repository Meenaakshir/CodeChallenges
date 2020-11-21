var num = [1, 2, 3, 4];
var elm = [];
var op = [];

for (let i = 0; i < num.length; i++) {
  if (num.index[i] % 2 == 0) {
    elm.push(num[i]);
  } else {
    op.push(num[i]);
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  console.log(op.reduce(reducer));
}

/*var num = [1, 2, 3, 4];
var elm = [];
var op = [];
var i;
//for (let i = 0; i < num.length; i++) {
if (num.indexOf[i] % 2 == 0) {
  num.pop(num[i]);
}

console.log(num);*/
