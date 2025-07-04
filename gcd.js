var n= 12;
var n1= 24;
let gcd=1;
let smaller=n<n1?n:n1
for(let i=1; i<=smaller;i++){
  if(n%i==0 && n1%i==0){
    gcd=i
  }
}
console.log(gcd)