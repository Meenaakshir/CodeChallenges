let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];

var groupAnagrams = function (strs) {
  let hash = {},
    anagrams = [];

  for (let i = 0; i < strs.length; i++) {
    let word = strs[i].split("").sort();
    hash[word] = hash[word] || [];
    hash[word].push(strs[i]);
  }
  return Object.values(hash);
};
//yet to complete//
