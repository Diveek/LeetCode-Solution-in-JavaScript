var restoreString = function (s, indices) {
  const result = [];
  for (let i = 0; i < s.length; i++) {
    result[indices[i]] = s[i];
  }
  console.log(typeof result.join(""));
};

restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]);

//s = "codeleet", indices = [4,5,6,7,0,2,1,3]
