const add = function(...arr) {
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
      sum += arr[i];
    }

    return sum;
};

const subtract = function(...arr) {
    let sum = 0;

    for(let i = 0; i < arr.length -1; i++){
      
      sum = arr[i] - arr[i + 1];
    }

    return sum;
};

const sum = function(...arr) {
  if (arr.length === 1 && Array.isArray(arr[0])) {
      arr = arr[0]; // Extract the array if a single array is passed as an argument
  }

  let sum = 0;    
  
  for(let i = 0; i < arr.length; i++){

    sum += arr[i];
  }

  sum = Number(sum);

  return sum;
	
};

const multiply = function(...arr) {

  if (arr.length === 1 && Array.isArray(arr[0])) {
    arr = arr[0]; // Extract the array if a single array is passed as an argument
  }

  let sum = 1;    

  for(let i = 0; i < arr.length; i++){

    sum *= arr[i];
  }

  sum = Number(sum);

  return sum;

};

const power = function(num, exponent) {

  result = Math.pow(num, exponent);

  return result;
  
	
};

const factorial = function(n) {

  if(n === 0 || n === 1){
    return 1;
  }

  let result = 1;

  for(let i = 2; i <= n; i ++){
    result *= i;
  }

    return result;

};
