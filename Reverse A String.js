
/* Bonfire: Reverse a String
Difficulty: 1/5
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
Remember to use RSAP if you get stuck. Try to pair program. Write your own code.
Here are some helpful links:
Global String Object String.split() Array.reverse() Array.join()
*/

function reverseString(str) {
  //turn string into an array
  //reverse the elements of the array
  //join the elements of the array
  
  str = str.split("").reverse().join("");
  
  return str;
}

reverseString("hello");
