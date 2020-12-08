var a = [1, 2, 3, 1];
var count = {};
a.forEach(function (i) {
  count[i] = (count[i] || 0) + 1;
});
console.log("true");
