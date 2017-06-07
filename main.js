// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(a,b){
    // Your answer here
    if (a > b){
      return a;
    } else if (b > a){
      return b;
    }
}


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(a,b,c){
    // Your answer here
    var firstTwo = 0;
    var max = 0;
    if(a >= b){
      firstTwo = a;
    } else {
      firstTwo = b;
    }
    if(c >= firstTwo){
      max = c;
    } else {
      max = firstTwo;
    }
    return max;
}


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){
    // Your answer here
    isTrue = false;
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
      isTrue = true;
    }
    return isTrue;
}


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:

function sum(a,b){
  return a + b;
}



// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:

function avg(a,b,c){
  return (a + b + c) / 3;
}


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:

function getlength(a){
  return a.length;
}



// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:

function greaterThan(a,b){
  isTrue = false;
  if (b > a){
    isTrue = true;
  }
  return isTrue;
}


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:

function greet(a){
  return 'Hello, ' + a + '!';
}


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:

function madlib(a,b,c,d){
  return 'A ' + a + ' ' + b + ' car sped past the ' + c + ' ' + d + '.';
}
