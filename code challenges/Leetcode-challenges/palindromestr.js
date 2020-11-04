var str = "A man, a plan, a canal: Panama";

function isPalindrome(strng) {
  var temp = strng.split(" ");
  var b = strng;
  var temp1 = b.split(" ");
  var final = temp.reverse();
  var one = final.join();
  var final1 = temp1.reverse();
  var two = final1.join();
  if (one == two) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isPalindrome(str);
