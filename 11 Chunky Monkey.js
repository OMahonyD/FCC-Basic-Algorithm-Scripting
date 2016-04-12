/***********************************************************

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.push()
Array.slice()

*************************************************************/

function chunk(arr, size) {
  
  //We need something to push the new arrays to
  var newArr = [];
  //Loop through arr
  //The counter variable "i" should increase in value by the value of "size"
  for(var i = 0; i < arr.length; i+=size){
    //Slice the arr
    //We can't just set the beginning of the slice method at zero as that won't work as the loop iterates over it
    //If we set the beginning of the slize() to "i" then when "i" increases on the second iteration ("i+=size"),
    //the slice will begin at the i+size
    //Remember that the end of the slice() method extracts up to but not including "end"
    
    newArr.push(arr.slice(i, i + size));
    
  }
  
  
  
  return newArr;
}

chunk(["a", "b", "c", "d"], 2);
