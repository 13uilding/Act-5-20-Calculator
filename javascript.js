var firstNumberFill = true;
var operatorField = $("#operator");


$(document).ready(function() {

// Numbers Button
$(".btn-primary").on("click", function(event){
  event.preventDefault();
  var number = $(this).attr("value");
  if (firstNumberFill){
    $("#first-number").append(number);
  } else if (!firstNumberFill){
    $("#second-number").append(number);
  };
});

// Operators
$(".btn-danger").on("click", function(event){
  event.preventDefault();
  var operator = $(this).attr("value");

  switch (operator) {

    // Move Buttons (Keyboard Down)
    case "plus":
      operatorField.text("+");
      firstNumberFill = false;
      break;

      // Move Buttons (Keyboard Right)
    case "minus":
      operatorField.text("-");
      firstNumberFill = false;
      break;

      // Move Buttons (Keyboard Up)
    case "times":
      operatorField.html(`*`);// &times;
      firstNumberFill = false;
      break;

      // Move Buttons (Keyboard Left)
    case "divide":
      operatorField.html("/"); // &divide;
      firstNumberFill = false;
      break;

      // Move Buttons (Keyboard Left)
    case "power":
      operatorField.text("**"); //^
      firstNumberFill = false;
      break;

    }
})

// Result button  THIS IS WHERE THE PROBLEM IS HAPPENING HENCE THE console.logs
$(".btn-success").on("click", function(event){
  event.preventDefault();
  var num1 = parseInt($("#first-number").text());
  var num2 = parseInt($("#second-number").text());
  // console.log(num1)
  // console.log(typeof num2)
  var operatorFieldText = operatorField.html()
  // console.log(operatorFieldText);
  var math_it_up = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '*': function (x, y) { return x * y },
    '/': function (x, y) { return x / y },
    '**': function (x, y) { return x ** y },
  };
  // console.log(math_it_up[operatorFieldText])
  var numbersFunction = math_it_up[operatorFieldText];
  // console.log(numbersFunction);
  var result = numbersFunction(num1, num2);
  // console.log(result);
  $("#result").text(result);

});

$(".btn-dark").on("click", function(event){
  event.preventDefault();
  $("#first-number").empty();
  $("#operator").empty();
  $("#second-number").empty();
  $("#result").empty();
  firstNumberFill = true;

  
})

});