// Add/remove items

// The filter method is commonly used when you need to extract or select specific elements from an array based on a condition, and it provides a concise way to achieve this.
const numbers = [1, 2, 3, 4, 5];

const evens = numbers.filter((number) => number % 2 === 0);
console.log(evens); // Output: [2, 4]
