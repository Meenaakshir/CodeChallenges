var myArray = [1, 2, 3, 1];
var i, j;
function checkduplicates(arr1) {
  for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray.length; j++) {
      if (myArray[i] == myArray[j]) {
        console.log("true");
      }
    }
  }
  console.log("false");
}
checkduplicates(myArray);

/*reference from internet*/
function getDuplicateArrayElements(arr) {
  var sorted_arr = arr.slice().sort();
  var results = [];
  for (var i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] === sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  return results;
}
