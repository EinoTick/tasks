function anagramForm() {
  var regex = new RegExp("[^A-Za-z]");
  var anagramWord1 = document.getElementById("formGroupExampleInput1").value;
  var anagramWord2 = document.getElementById("formGroupExampleInput2").value;
  //alert((!!anagramWord1 && !!anagramWord2));
  if (!!anagramWord1 && !!anagramWord2) {
    (!anagramWord1.match(regex) || !anagramWord2.match(regex)) ? anagramCheck(anagramWord1, anagramWord2) : alert("Please use only characters a-z and A-Z");
  } else {
    alert("Please, fill both input fields!");
  }
  
}

function anagramCheck(word1, word2) {
  sortedWord1 = word1.split('').sort().join('').toLowerCase();
  sortedWord2 = word2.split('').sort().join('').toLowerCase();
  console.log(sortedWord1);
  console.log(sortedWord2);
  if (sortedWord1 === sortedWord2) {
    document.getElementById("anagramResult").innerHTML   = "" + word1 + " is anagram with " + word2;
  } else {
    document.getElementById("anagramResult").innerHTML   = "" + word1 + " is not anagram with " + word2;
  }
}