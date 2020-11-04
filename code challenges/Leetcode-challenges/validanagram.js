var str1 = "anagram";
var t = "nagaram";

function isValidAnagram(strng) {
  var firststr = strng.split("");
  var secstr = t.split("");

  var a = firststr.sort();
  console.log(a);
  var b = secstr.sort();
  console.log(b);
  for (i = 0; i < a.length; i++) {
    if (a[i] == b[i]) {
      console.log("valid anagram");
    } else {
      console.log("not a valid anagram");
    }
  }
}
isValidAnagram(str1);

//Another Way //

var str1 = "anagram";
var t = "nagaram";
var len1 = str1.length;
var len2 = t.length;

if (len1 != len2) {
  console.log("Its not a valid Anagram");
}

[...str1];
[...t];

var x = [...str1].sort();
var y = [...t].sort();

var first = x.join();
var sec = y.join();

if (first == sec) {
  console.log("its an anagram");
}
