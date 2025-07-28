// adding positive nums using filter and reducer function using js

const arr = [6, -5, 7, -2, 10, 4, 6, -1];
const addedNum = arr.filter((el) => el > 0).reduce((acc, num) => acc + num);
console.log(addedNum);
