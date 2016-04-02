/*****************************
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*******************************/

function factorialize(num) {
  //if num is 1 there are no other positive integers
  //less than or equal to 1 so just return 1
  if(num <= 1){
    return 1;
  }else{
    //else num is greater than 1
    //set num equal to (num multiplied by the function factorialize
    //taking (num minus 1) as the variable
    //This will recursively repeat until the condition 
    //in the if statement is true;
    return num *= factorialize(num - 1);
  } 
    
}

factorialize(5);
