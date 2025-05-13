let myArray = ["apple", "banana", "cherry", "date", "fig"];
console.log("Initial array:", myArray);

myArray.push("grape");
console.log("After adding an element:", myArray);

myArray.splice(2, 1);
console.log("After removing the third element:", myArray);

let joinedString = myArray.join(", ");
console.log("Comma-separated string:", joinedString);
