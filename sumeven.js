arr=[12,25,24,3,2,1,25,28,27,21]
sum=0
for(i=0;i<=arr.length;i++){
    if(arr[i]%2==0){
        sum+=arr[i];
    }
}
console.log(sum)