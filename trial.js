let a = 5;  // Replace with your first value
let b = 10; // Replace with your second value

a = a + b;  // Step 1: Add both values and store in 'a'
b = a - b;  // Step 2: Subtract new 'a' (which is 'a + b') by 'b' to get the original 'a'
a = a - b;  // Step 3: Subtract new 'b' (which is the original 'a') from 'a' to get the original 'b'

console.log("After swapping:");
console.log("a:", a);
console.log("b:", b);