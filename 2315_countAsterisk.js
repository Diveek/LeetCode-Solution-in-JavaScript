const countAsterisk = (s) => {
  // WAY:: 1  Main idea: split by |, count only even index string's *
  //   let a = s.split("|"),
  //     res = 0;
  //   for (let i = 0; i < a.length; i++) {
  //     if (i % 2 == 0) {
  //       for (const c of a[i]) {
  //         if (c == "*") res++;
  //       }
  //     }
  //   }
  //   console.log(res);

  //WAY 2
  let flag = false;
  let ast = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "|") flag = !flag;
    else if (!flag && s[i] == "*") ast++;
  }
  console.log(ast);
};

countAsterisk("l|*e*et|c**o|*de|");
