/**********************************
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Comparison Operators
*********************************/

function largestOfFour(arr) {
  //Define a variable for the highest value
  var highestVal = 0;
  //Define a variable to hold the final array
  var finalArray = [];
  //Loop over the array
  for(var i = 0; i < arr.length; i++) {
    //arr[i] is equal to a subarray
    //set the highestVal variable equal to the reduce method called on the subarray
    //Within the reduce method take two of the numbers and compare them to find the highest
    highestVal = arr[i].reduce(function(a, b){
      if(a > b){
        return a;
      }else{
        return b;
      }
      
    });
    //Push the highestVal in each of the subarrays to the final array
    finalArray.push(highestVal);
  }
  
  //return the finalArray
  return finalArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


