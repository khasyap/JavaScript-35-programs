function add(...arr){
  return arr.reduce((acc,i)=>(acc+i))
}
console.log(add(2,3));