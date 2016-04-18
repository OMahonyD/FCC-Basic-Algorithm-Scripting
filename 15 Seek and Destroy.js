/****************************************
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Arguments object

    Array.filter()
****************************************/

function destroyer(arr) {
  //Create an array to store the values we need to remove
  var valuesToRemove = [];
  //Create an empty array which we can push the values to
  var finalArray = [];
  
  //This was a final step to clean up code
  var destroyUnwantedValues = function(val){
    //This line tests if the index of the value does not exist
      //to return it
    if(valuesToRemove.indexOf(val) === -1){
      return val;
    }
  };
  
  //User the arguments object to iterate through and retrieve the values we want to check are in the array (arr)
    //Start iteration at 1 because
    //the first argument is the array we want to work on
  for(var i = 1; i < arguments.length; i++){
    //push the arguments to the valuesToRemove array
    valuesToRemove.push(arguments[i]);
  }
  
  //This filters arr and makes it equal to finalArray
    //It uses the destroyUnwantedValues function
    //which returns the values that are not present in the valuesToRemove array
  finalArray = arr.filter(destroyUnwantedValues);
  
 
  //Finally, we return finalArray 
  return finalArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
