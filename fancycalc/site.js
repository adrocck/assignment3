function add(num1, num2){
  //the goal of the function is to a string that says
  //num1 + num2 = result

  //make sure your numbers are numbers, no string
  var result = parseFloat(num1) + parseFloat(num2),
      addString = num1 + '+' + num2 + '=' + result;

  return addString;
}

// substract

function subtract(num1, num2){

  var subtract = parseFloat(num1) - parseFloat(num2),
      subtractString = num1 + ' - ' + num2 + ' = ' + subtract;

  return subtractString;
}

// multiply

function multiply(num1, num2){

  var multiply = parseFloat(num1) * parseFloat(num2),
    multiplyString = num1 + ' * ' + num2 + ' = ' + multiply;

  return multiplyString;
}

// divide

function divide(num1, num2){

  var divide = parseFloat(num1) / parseFloat(num2),
    divideString = num1 + ' / ' + num2 + ' = ' + divide;

  return divideString;
}

// this function will grab the inputs, populate the result div
// and run an operation

function populatehtml(operation){
  var input1 = document.getElementById('first').value;
  var input2 = document.getElementById('second').value;
  var output = operation(input1,input2);
    document.getElementById('result').innerText += output;

// this if else statement will return a statement if no
// value is entered

    if (input1 == "" || input2 == ""){

    document.getElementById('result').innerHTML="What are you doing?";
    }
}

// buttons are assigned a function to do calculation

document.getElementById('add').onclick = function(){
    populatehtml(add) };
document.getElementById('subtract').onclick = function(){
    populatehtml(subtract) };
document.getElementById('multiply').onclick = function(){
    populatehtml(multiply) };
document.getElementById('divide').onclick = function(){
 populatehtml(divide) };
 var result

// substract

// multiply

// divide

// this function will grab the inputs, populate the result div
// and run an operation
