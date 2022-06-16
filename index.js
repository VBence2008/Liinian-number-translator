//Replace NUMBER value with your number and done!
let NUMBER = 2022;
NUMBER++;
const bb26 = require("bb26");
String.prototype.allReplace = function (obj) {
  var retStr = this;
  for (var x in obj) {
    retStr = retStr.replace(new RegExp(x, "g"), obj[x]);
  }
  return retStr;
};
let RESULT = bb26.toBb26(NUMBER).allReplace({
  B: "Ä",
  C: "B",
  F: "Ë",
  G: "F",
  H: "G",
  I: "H",
  J: "I",
  K: "Ï",
  L: "K",
  M: "L",
  N: "M",
  O: "N",
  P: "O",
  Q: "Ö",
  R: "P",
  S: "R",
  T: "S",
  U: "T",
  V: "U",
  W: "Ü",
  X: "V",
  Z: "Ÿ",
});
let RESULTL = RESULT.allReplace({
  A: "any",
  Ä: "äny",
  B: "ben",
  D: "den",
  E: "eny",
  Ë: "ëny",
  F: "fin",
  G: "gin",
  H: "hin",
  I: "iny",
  Ï: "ïny",
  K: "kon",
  L: "lon",
  M: "mon",
  N: "non",
  O: "ony",
  Ö: "öny",
  P: "pun",
  R: "run",
  S: "sun",
  T: "tun",
  U: "uny",
  Ü: "üny",
  V: "vyn",
  Y: "yny",
  Ÿ: "ÿny",
});
console.log(RESULT + "\n" + RESULTL);