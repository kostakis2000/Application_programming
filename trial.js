// Define the function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Call the function with various strings and log the results
console.log("Reversed 'hello':", reverseString('hello'));
console.log("Reversed 'JavaScript':", reverseString('JavaScript'));
console.log("Reversed '12345':", reverseString('12345'));
console.log("Reversed 'OpenAI':", reverseString('OpenAI'));