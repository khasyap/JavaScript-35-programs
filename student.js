students = [ 
{ name: 'John', age: 17 }, 
{ name: 'Jane', age: 19 }, 
{ name: 'Jack', age: 18 }, 
];
var adult=students.map((i)=>{
    return{
        ...i,
        isAdult:i.age>=18
    }
})
console.log(adult)