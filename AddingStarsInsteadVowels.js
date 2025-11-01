/*

let us consider a string 'tomorrow'

vowel letters in tomorrow string
should be printed as stars with
respect to no of occurence

input = 'TOMORROW'
vowels in input -> three O's

appending star in output could be
the count of each time each vowel
occurence 

output = T*M**RR***W

*/

const str = 'TOMORROW';

const vowels = ['a','e','i','o','u'];

let occur = 0;

let result = '';

for(i=0;i<str.length;i++){
    if(vowels.includes(str[i].toLowerCase())){
        occur += 1;
        for(j=0;j<occur;j++){
            result += '*';
        }
    }
    else{
        result += str[i]
    }
    
}
console.log(result)
