//adding positive numbers in an array
const arr = [6, -5, 7, -2, 4, 6, -1];
let value = 0;
arr.forEach((num) => {
  if (num > 0) {
    value += num;
  }
});
console.log(value);
