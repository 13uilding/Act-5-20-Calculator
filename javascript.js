var firstNumberFill = true;
var operatorField = $("#operator");
const math_it_up = {
  '+': function (x, y) { return x + y },
  '-': function (x, y) { return x - y },
  '*': function (x, y) { return x * y },
  '/': function (x, y) { return x / y },
  '**': function (x, y) { return x ** y },
};

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

    case "plus":
      operatorField.text("+");
      firstNumberFill = false;
      break;

    case "minus":
      operatorField.text("-");
      firstNumberFill = false;
      break;

    case "times":
      operatorField.html(`*`);// &times;
      firstNumberFill = false;
      break;

    case "divide":
      operatorField.html("/"); // &divide;
      firstNumberFill = false;
      break;

    case "power":
      operatorField.text("**"); //^
      firstNumberFill = false;
      break;
    }
});

// Result button
$(".btn-success").on("click", function(event){
  event.preventDefault();
  var num1 = parseInt($("#first-number").text());
  var num2 = parseInt($("#second-number").text());
  var operatorFieldText = operatorField.html()
  var numbersFunction = math_it_up[operatorFieldText];
  var result = numbersFunction(num1, num2);
  $("#result").text(result);
});

// Remove button
$(".btn-dark").on("click", function(event){
  event.preventDefault();
  $("#first-number").empty();
  $("#operator").empty();
  $("#second-number").empty();
  $("#result").empty();
  firstNumberFill = true;
});

});