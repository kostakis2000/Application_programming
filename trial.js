let items = ["Apple", "Banana", "Mango", "Orange"]; // Array to search in
let searchItem = "Mango"; // Item to find

// Find the index of the specific item
let index = items.indexOf(searchItem);

// Check if the item was found
if (index !== -1) {
    console.log(`The item "${searchItem}" is found at index ${index}.`);
} else {
    console.log(`The item "${searchItem}" is not found in the array.`);
}