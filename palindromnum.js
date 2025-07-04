var num=prompt("enter a number")
temp=num
let rem,str=""
while(num!=0){
    rem=num%10
    str+=rem
    num=parseInt(num/10)
}
if(str==temp){
    document.writeln("palindrome")
}
else{
    document.writeln("not palindrome")
}