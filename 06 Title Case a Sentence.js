/**********************************************
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.split()
**********************************************/

function titleCase(str) {
  //Make the sentence lowercase
  //split into an array
  str = str.toLowerCase().split(" ");
  //iterate over the array
  for(var i = 0; i < str.length; i++) {
    //Example: make the word (little) equal to Little
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    
  }
  //return the string joined together
  return str.join(" ");
}

titleCase("I'm a little tea pot");

