//       CHAPTER 35 & 38:

//1. Write a function that displays current date & time in your browser.

//ANS # 1:
//function displayCurrentDateTime() {
//    const dateTimeElement = document.getElementById("datetime");
//    const currentDate = new Date();
//    const dateTimeString = currentDate.toLocaleString();
//    dateTimeElement.textContent = "Current Date and Time: " + dateTimeString;
// }
// displayCurrentDateTime();

//2. Write a function that takes first & last name and then it greets the user using his full name.

//ANS # 2:
//function greetUser() {
//    const firstName = document.getElementById("firstName").value;
//    const lastName = document.getElementById("lastName").value;
//    const greetingElement = document.getElementById("greeting");

//    if (firstName && lastName) {
//        const fullName = `${firstName} ${lastName}`;
//        greetingElement.textContent = `Hello, ${fullName}!`;
//    } else {
//        greetingElement.textContent = "Please enter both your first and last name.";
//    }
//}

//3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

//ANS # 3:
//function addNumbers() {
//    const num1 = parseFloat(prompt("Enter the first number:"));
//    const num2 = parseFloat(prompt("Enter the second number:"));

//    if (!isNaN(num1) && !isNaN(num2)) {
//        const sum = num1 + num2;
//        return sum;
//    } else {
//        return "Invalid input. Please enter valid numbers.";
//    }
//}

//const result = addNumbers();
//if (typeof result === "number") {
//    console.log(`The sum of the two numbers is: ${result}`);
//} else {
//    console.log(result);
//}

//4. Calculator:
//Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

//ANS # 4:
//function calculate(num1, num2, operator) {
//    let result;
  
//    if (operator === '+') {
//      result = num1 + num2;
//    } else if (operator === '-') {
//      result = num1 - num2;
//    } else if (operator === '*') {
//      result = num1 * num2;
//    } else if (operator === '/') {
//      if (num2 !== 0) {
//        result = num1 / num2;
//      } else {
//        return "Division by zero is not allowed.";
//      }
//    } else {
//    return "Invalid operator";
//    }
  
//    return result;
//  }
//  const num1 = 10;
//  const num2 = 5;
//  const operator = '+';
  
//  const result = calculate(num1, num2, operator);
//  document.getElementById('result').innerHTML = `Result: ${result}`;
  
//5. Write a function that squares its argument.

//ANS # 5:
//function square(number) {
//    return number * number;
//  }
  
//  const num = 5;
//  const result = square(num);
  
//  document.getElementById('result').innerHTML = `The square of ${num} is ${result}`;
  
//6. Write a function that computes factorial of a number.

//ANS # 6:
//function factorial(n) {
//    if (n === 0 || n === 1) {
//      return 1;
//    } else {
//      return n * factorial(n - 1);
//    }
//  }
  
//  const num = 5;
//  const result = factorial(num);
  
//  document.getElementById('result').innerHTML = `The factorial of ${num} is ${result}`;
  
//7. Write a function that take start and end number as inputs & display counting in your browser.

//ANS # 7:
//function countNumbers(start, end) {
//    if (start <= end) {
//      for (let i = start; i <= end; i++) {
//        console.log(i); 
//          }
//    } else {
//      console.log("Start number should be less than or equal to the end number.");
//    }
//  }
  
//  const startNumber = 1;
//  const endNumber = 10;
  
//  countNumbers(startNumber, endNumber);
  
//8. Write a nested function that computes hypotenuse of a right angle triangle. Hypotenuse2 = Base2 + Perpendicular2
//Take base and perpendicular as inputs.
//Outer function : calculateHypotenuse()
//Inner function: calculateSquare()

//ANS # 8:
//function calculateHypotenuse(base, perpendicular) {
//    function calculateSquare(number) {
//      return number * number;
//    }
  
//    const baseSquared = calculateSquare(base);
//    const perpendicularSquared = calculateSquare(perpendicular);
//    const hypotenuseSquared = baseSquared + perpendicularSquared;
//    const hypotenuse = Math.sqrt(hypotenuseSquared);
  
//    return hypotenuse;
//  }
//    const base = 3;
//  const perpendicular = 4;
  
//  const result = calculateHypotenuse(base, perpendicular);
//  console.log(`The hypotenuse of the right-angled triangle is ${result}`);
  
//9. Write a function that calculates the area of a rectangle.A = width * height Pass width and height in following manner:
//i. Arguments as value
//ii. Arguments as variables

//ANS # 9:
//i. Arguments as value
//function calculateRectangleAreaByValues(width, height) {
//    const area = width * height;
//    return area;
//  }
  
//  const areaByValues = calculateRectangleAreaByValues(5, 8);
//  console.log(`Area of the rectangle: ${areaByValues}`);

//ii. Arguments as variables
//  function calculateRectangleAreaByVariables() {
//    const width = 5;
//    const height = 8;
//    const area = width * height;
//    return area;
//  }
  
//  const areaByVariables = calculateRectangleAreaByVariables();
//  console.log(`Area of the rectangle: ${areaByVariables}`);
  
//10. Write a JavaScript function that checks whether a passed string is palindrome or not?
//A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

//ANS # 10:
//function isPalindrome(str) {
//   str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
//    return str === str.split("").reverse().join("");
//  }
  
//  const testString = "madam";
//  const result = isPalindrome(testString);
  
//  if (result) {
//    console.log(`"${testString}" is a palindrome.`);
//  } else {
//    console.log(`"${testString}" is not a palindrome.`);
//  }
  
//11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the 
//string in upper case. 
//EXAMPLE STRING : 'the quick brown fox'
//EXPECTED OUTPUT : 'The Quick Brown Fox'

//ANS # 11:
//function capitalizeWords(inputString) {
//    const words = inputString.split(' ');
  
//    const capitalizedWords = words.map(word => {
//      return word.charAt(0).toUpperCase() + word.slice(1);
//    });
//    const result = capitalizedWords.join(' ');
//    return result;
//  }
//  const inputString = 'the quick brown fox';
//  const outputString = capitalizeWords(inputString);
//  console.log(outputString);
  
//12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
//EXAMPLE STRING : 'Web Development Tutorial'
//EXPECTED OUTPUT : 'Development'

//ANS # 12:
//function findLongestWord(inputString) {
//    const words = inputString.split(' ');
  
//    let longestWord = '';
  
//    for (let i = 0; i < words.length; i++) {
//      if (words[i].length > longestWord.length) {
//        longestWord = words[i];
//      }
//    }
//     return longestWord;
//  }
  
//  const inputString = 'Web Development Tutorial';
//  const longestWord = findLongestWord(inputString);
  
//  console.log(longestWord);
  
//13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
//Sample arguments : 'JSResourceS.com', 'o'

//ANS # 13:
//function countOccurrences(inputString, letter) {
//    let count = 0;
  
//    for (let i = 0; i < inputString.length; i++) {
//      if (inputString[i] === letter) {
//        count++;
//      }
//    }
//    return count;
//  }
  
//  const inputString = 'JSResourceS.com';
//  const letterToCount = 'o';
  
//  const occurrences = countOccurrences(inputString, letterToCount);
  
//  console.log(`The letter "${letterToCount}" appears ${occurrences} times in the string.`);
  
//14. The Geometrizer
//Create 2 functions that calculate properties of a circle, using the definitions here.
//Create a function called calcCircumference:
//• Pass the radius to the function.
//• Calculate the circumference based on the radius, and output "The circumference is NN".
//Create a function called calcArea:
//• Pass the radius to the function.
//• Calculate the area based on the radius, and output "The area is NN".
//Circumference of circle = 2πr Area of circle = πr2

//ANS # 14:
//function calcCircumference(radius) {
//    const circumference = 2 * Math.PI * radius;
//    console.log(`The circumference is ${circumference.toFixed(2)}`);
//  }
  
//  function calcArea(radius) {
//    const area = Math.PI * Math.pow(radius, 2);
//    console.log(`The area is ${area.toFixed(2)}`);
//  }
  
//  const radius = 5;
//  calcCircumference(radius);
//  calcArea(radius);
  