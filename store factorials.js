var arr=[2,6,5,4,3]
function factorial(n){
  fact=1
  for(i=2;i<=n;i++){
    fact=fact*i
  }
  return fact;
}
var newarr=arr.map(factorial);
console.log(newarr)