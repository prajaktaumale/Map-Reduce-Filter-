//solution of Q1
const input=[1,2,3,4,5];
const result = input.map((input)=>{
return input*2;
})
console.log(result)


//solution of Q2
const str= 'George Raymond Richard Martin'
const answer = str.match(/\b(\w)/g).join('');
console.log(answer)


//Solution of Q3
const data = [
    {
        name: 'John',
        age : 13
    },
    {
        name: 'Mark',
        age : 56
    },
    {
        name: 'Rachel',
        age : 45
    },
    {
        name: 'Nate',
        age : 67
    },
    {
        name: 'Jennifer',
        age : 65
    }
];
const inage = data.map((obj)=>{
    return obj.age;
})
console.log(inage)