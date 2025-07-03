// function isPrime(number){
//     if(number<2)
//         return false;
//     for(let i=2;i<=Math.sqrt(number);i++){
//         if(number%i==0)
//             return false;
//     }
//     return true;
// }
// for (let i=0;i<=100;i++){
//     if(isPrime(i)){
//    console.log(i)
//     }
// }


for (i=1;i<=100;i++){
    isPrime=true;
    if(i<=1){
        isPrime=false;
    }
    else{
        for(j=2;j<i;j++){
            if(i%j==0){
                isPrime=false
            }
        }
    }
    if(isPrime)
        console.log(i+' ')
}