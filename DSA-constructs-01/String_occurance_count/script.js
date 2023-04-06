function getOccurCount(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  let n = str1.length;
  let count = 0;
  let findIdx = -1;
  for (let i = 0; i < n; i++) {
    findIdx = str2.indexOf(str1.charAt(i));
    if (findIdx > -1) {
      count++;
      str2 = str2.substr(0, findIdx) + str2.substr(findIdx + 1);
    }
  }
  console.log(count);
}

getOccurCount("CLOFUS", "prasanna");
getOccurCount("CLOFUS", "clofus");
