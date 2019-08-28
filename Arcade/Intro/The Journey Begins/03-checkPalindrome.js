
const checkPalindrome=(str)=> {
  return str.toLowerCase().trim() === str.toLowerCase().trim().split('').reverse().join('');
}
console.log(checkPalindrome("Level "))

