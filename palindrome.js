function isPalindromeName(name) {
  
  let str = name.toString()


  let reversed = str.split('').reverse().join('');

 
  return str === reversed;
}


let name = 121;

if (isPalindromeName(name)) {
  console.log(name + " is a palindrome.");
} else {
  console.log(name + " is not a palindrome.");
}