let num=123;
let temp=num;
let sum,fact=0;
while(num!=0){
  rem=num%10
  fact=1
  for(i=1;i<=rem;i++){
    fact=fact*i
  }
  sum+=fact;
  num=parseInt(num/10)
}
if(sum==temp){
  console.log(`${temp} is strong`)
}
else{
  console.log(`${temp} is not strong`)
}
