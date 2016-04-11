/*************************************
Repeat a given string (first argument) num times (second argument). Return an empty string if num is a negative number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global String Object
*************************************/

function repeat(str, num) {
  //if num is negative return empty string
  if(num < 0){
    return "";
  }else{
    str = str.repeat(num);
  }  
  return str;
}

repeat("abc", 3);

