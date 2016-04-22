/******************************************************************
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
Thus 'A' ↔ 'N', 'B' ↔  'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:

    String.charCodeAt()

    String.fromCharCode()
*******************************************************************/

function rot13(encodedStr) { 
  var codeArr = encodedStr.split(""); //String to Array
  var decodedArr = [];//Results to go here
  //Create an alphabet character array
    //that goes past z by 13 letters starting with A
  var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
  //Iterate through inputted string array
  for(var i = 0; i < codeArr.length; i++){
    //if current value of codeArr isn't in alphabet
    if(alphabet.indexOf(codeArr[i]) == -1){
      //add that current value to decodedArr
      decodedArr.push(codeArr[i]);
    }else{
      //iterate through alphabet
      for(var j = 0; j < alphabet.length; j++){
        //if current value of codeArr is equal to 
          //the current value of alphabet
        if(codeArr[i] === alphabet[j]){
          //push the current value of alphabet plus 13 index shifts to decodedArr
          decodedArr.push(alphabet[j+13]);
        }
      }
    }
  }
  
  
  return decodedArr.join(''); //Array to String
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
