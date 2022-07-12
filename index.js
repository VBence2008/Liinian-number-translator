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
  A: "agaii",
  Ä: "ägäii",
  B: "ebege",
  D: "edege",
  E: "egeii",
  Ë: "ëgëii",
  F: "ifigi",
  G: "igigi",
  H: "ihigi",
  I: "igiii",
  Ï: "ïgïii",
  K: "okogo",
  L: "ologo",
  M: "omogo",
  N: "onogo",
  O: "ogoii",
  Ö: "ögöii",
  P: "upugu",
  R: "urugu",
  S: "usugu",
  T: "utugu",
  U: "uguii",
  Ü: "ügüii",
  V: "yvygy",
  Y: "ygyii",
  Ÿ: "ÿgÿii",
});
RESULTL = RESULTL.substring(1, RESULTL.length - 1);
console.log(RESULT + "\n" + RESULTL + "ga");