var nums = [2, 7, 11, 15];
var t = 9;
var x;

for (i = 0; i < nums.length; i++) {
  x = t - nums[i]; //fixing t as the result number
  if (x > 0 && nums.includes(x)) {
    console.log(nums.indexOf(x));
  }
}
