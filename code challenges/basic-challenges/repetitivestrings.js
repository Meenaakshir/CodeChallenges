/*let strArray = "This is a cool cool programs";

let findduplicates = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) != index);
console.log(findduplicates(strArray));*/

let strArray = "This is a cool cool program";
let arr = strArray.split(" ");
let findDuplicates = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) != index);

console.log(findDuplicates(strArray));

if (findDuplicates(strArray).length > 1) {
  console.log("2 times repetition", +findDuplicates(strArray));
}
