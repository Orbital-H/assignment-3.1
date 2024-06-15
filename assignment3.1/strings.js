//severien meyer
var messageBox = document.getElementById('message');
var textBox = document.getElementById('textBox');
//sets up a check box for the user to enter text in with
var checkButton = document.getElementById('checkButton');
function isPalindrome(text) {
    var prune = text.replace(/[^a-zA-Z0-9]/g, '');
//gets rid of any charcters might sintax error it from user imput
    var lowercaseText = prune.toLowerCase();
//sets users imputs to all lowercase

  var reversedText = lowercaseText.split('').reverse().join('');
//takes each word, stores the anwser,reverses it and compaires if its the same.
  return lowercaseText === reversedText;
}


checkButton.addEventListener('click', function () {
//
  var userText = textBox.value.trim(); 
//reduces the space at the front or the back of the user imput

  var isTextPalindrome = isPalindrome(userText);

   
  if (isTextPalindrome) {
    messageBox.textContent = `Hey! "${userText}" is a palindrome! Nice one!`;
  } else {
    
    messageBox.textContent = `Oh no! "${userText}" is not a palindrome. Maybe next time!`;
  }
});
//return the output to user depending on retuned variables.  