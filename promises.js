var num=parseInt(34);
let pro = new Promise((even1,odd1)=>{
  if(num%2==0){
    even1('it is even')
  }
  else{
    odd1('it is odd')
  }
})
.then((msg)=>console.log(msg))
.catch((msg)=>console.log(msg))
.finally(()=>console.log('thankyou'))