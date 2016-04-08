/*******************************************
Check if a string (first argument, str) ends with the given target string (second argument, target).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.substr()
*******************************************/

function end(str, target) {

  //str.substr(start[,length])
  //"start" will be different in all tests as we are checking for both single letters and full words
  //therefore to find "start"
  //take the length of the target argument away from the length of the str argument
  //this will return a number which is where the substr will start
  //if this substr is equal to target the function will return true
  //if this substr is not equal to target the function will return false
  
  return str.substr(str.length - target.length) == target;
}


end("Connor", "n");
