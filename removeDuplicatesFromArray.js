// removing duplicates from an array

const arr = [4, 5, 2, 3, 1, 1, 3, 5, 7, 10, 8, 4, 3];
const arr1 = arr.reduce((acc, el) => {
  if (!acc.includes(el)) {
    acc.push(el);
  }
  return acc;
}, []);
console.log(arr1);
