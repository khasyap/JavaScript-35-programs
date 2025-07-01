const obj = { a: 1, b: 2, c: 3, d: 4 }; 
const keys = ['b', 'c'];
var acc=keys.reduce((acc,i)=>{
    if(i in obj){
        acc[i]=obj[i]
    }
    return acc
},{})
console.log(acc)

 acc={}
 for(k of keys){
     if(k in obj){
         acc[k]=obj[k]
     }
 }
 console.log(acc)
