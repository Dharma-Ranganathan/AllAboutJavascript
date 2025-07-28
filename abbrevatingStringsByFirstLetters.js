//abbreviating the strings by first letter

const str = "Robert andrew George";
let abbreviatedName = "";
const arr = str.split(" ").map((i) => {
  abbreviatedName += i[0];
});
console.log(`${str} is abbrevaited as ${abbreviatedName.toUpperCase()}`);
