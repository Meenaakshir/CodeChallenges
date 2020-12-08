var arr1 = [-1, 0, 1, 2, -1, -4];
var num;
var target = 0;
var arr2 = [];
function checkSumofzero(arr) {
  if (arr.length % 3 != 0) {
    console.log("this is not a valid array");
  }

  for (i = 0; i < arr1.length; i++) {
    if (arr[i] + arr1[i + 1] + arr[i + 2] === 0) {
      arr2.push(arr[i], arr[i + 1], arr[i + 2]);
    }
  }
  console.log(arr2);
}
checkSumofzero(arr1);

//not the right answer
