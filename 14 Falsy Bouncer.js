/*****************************************
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Boolean Objects

    Array.filter()
******************************************/
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var holderArray = [];
  holderArray = arr.filter(removeFalseyValues);
  
    return holderArray;
  }
  
var removeFalseyValues = function(value){
  return Boolean(value);
};
  
bouncer([7, "ate", "", false, 9]);
