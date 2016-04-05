/*****************
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.split()
String.length
******************/

function findLongestWord(str) {
  //declare holding variable and initialise to 0
  var longest = 0;
 
  //split str into an array of words
  str = str.split(" ");
  //Iterate through each index of the array
  for(var i = 0; i < str.length; i++){
    //if the length of the current index is longer than currentLongest
    if(longest < str[i].length){
      //assign the length of the current index to currentLongest
      longest = str[i].length;
      
    }

   
  }
   return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
