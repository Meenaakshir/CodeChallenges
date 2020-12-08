//Input:  [1,2,3,4]
//Output: [24,12,8,6]//

var arr = [1, 2, 3, 4];
var prodarr = [];
var temparr = [];
function prod(array) {
  for (i = 0; i < array.length; i++) 
  temparr = array.slice(array[i]);

  console.log(temparr);
}
