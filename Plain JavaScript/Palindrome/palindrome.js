function palindromeForm() {
  // regex [A-Za-z0-9 _.,!"'/$]*
  var regex = new RegExp("[^A-Za-z0-9 :;.,!?]");
  var palWord = document.getElementById("formGroupExampleInput").value;
  !!palWord ? 
        (!palWord.match(regex) ? palindromeCheck(palWord) : alert("Please use only letters(a-z), numbers(0-9), space and punctuation!")) 
        : alert("Please, fill the form!");
        
  alert(palWord.test(regex));      
}

function palindromeCheck(word) {
  reverseWord = word.split('').reverse().join('');
      
  if (reverseWord === word) {
    document.getElementById("paliResult").innerHTML   = "" + word + " is palindrome";
  } else {
    document.getElementById("paliResult").innerHTML   = "" + word + " is not palindrome"; 
  }
}