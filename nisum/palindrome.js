function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return str === str.split("").reverse().join("");
}

// Example usage
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("racecar")); // false