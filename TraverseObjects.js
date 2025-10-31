// traversing methods of objects

const obj = {
    id : 1,
    name : 'dharma',
    age : 22,
    score : 9.7
}

// 1. for key in obj
for(key in obj){
    console.log(key,obj[key])
}
console.log()

// 2. object keys method
const keys = Object.keys(obj)

keys.forEach((key)=>console.log(key,obj[key]))
console.log()

// 3. entries method in object
const entries = Object.entries(obj)

entries.forEach(([k,v])=>console.log(k,v))
