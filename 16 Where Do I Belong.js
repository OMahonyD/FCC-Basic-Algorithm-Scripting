/*********************************
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Array.sort()
*********************************/

function where(arr, num) {
  //Push num into the array
  arr.push(num);
  //Sort the array
  //If we use .sort(num) the array will be sorted on unicode point value
  //Created a compareNumbers function which sorts the array ascending
  //Pass the assending array into the arr.sort();
  
  arr.sort(compareNumbers);
   
  //Return the index at which num is located in the array
  return arr.indexOf(num);
}

var compareNumbers = function(a, b){
  return a - b;
};


where([3, 10, 5], 3);
