const str = "2$3";
let num = 0;
const str0 = Number(str[0]);
const str2 = Number(str[2]);
switch (str[1]) {
  case "+":
    num = str0 + str2;
    break;
  case "-":
    num = str0 - str2;
    break;
  case "*":
    num = str0 * str2;
    break;
  case "/":
    num = (str0 / str2).toFixed(2);
    break;
  default:
    num = "Invalid";
}
console.log(num);
