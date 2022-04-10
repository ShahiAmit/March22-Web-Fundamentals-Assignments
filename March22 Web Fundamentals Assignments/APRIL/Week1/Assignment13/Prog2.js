//2. Check whether the given chracter is a vowel or not. (Also check for capital characters).
const C = prompt("Enter the Single Character");
if(isVowel(C))
{
    console.log("Character is Vowel");
}
else{
    console.log("Character is not Vowel");
}
function isVowel(C) {
    if (C.length == 1) {
      var vowels = new Array("a", "e", "i", "o", "u");
      var isVowel = false;
  
      for (e in vowels) {
        if (vowels[e].toUpperCase() == C.toUpperCase()) {
          isVowel = true;
        }
      }
  
      return isVowel;
    }
  }