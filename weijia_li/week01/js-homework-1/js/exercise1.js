// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

var squareNumber = function(num1) {
  var num2 = Math.pow(num1, 2);

  console.log('The result of squaring the number ' + num1 + ' is ' + num2 + ".");
  return num2;
};

squareNumber(29);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

var halfNumber = function(num1) {
  var num2 = num1 / 2;

  console.log('Half of ' + num1 + ' is ' + num2 + '.');
  return num2;
};

halfNumber(83);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

var percentOf = function(num1, num2) {
  var result = num1 / num2 * 100;

  console.log(num1 + ' is ' + result + '% of ' + num2 + '.');
  return result;
};

percentOf(2, 4);

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

var areaOfCircle = function(radius) {
  var result = (Math.PI * radius ** 2).toFixed(2);

  console.log('The area for a circle with radius ' + radius + ' is ' + result + '.');
  return result;
};

areaOfCircle(2);

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

var final = function(num) {
  var result1 = halfNumber(num);
  var result2 = squareNumber(result1);
  var result3 = areaOfCircle(result2);
  var result4 = percentOf(result3, result2);

  console.log(result4);
  return result4;
};

final(9);
