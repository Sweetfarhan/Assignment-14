//1. Write a js program to read and print elements of array.
var array = ["Zain","usman","Shahzad","Tayyab","Farhan"];
// console.log(array);
for (var i = 0; i < array.length; i++){
    console.log(array[i]);
}
//2. Write a js program to print all negative elements in an array.
var array = [1, -2, 3, -4, 5, -6, -7];
console.log("Negative elements of the array:");
for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        console.log(array[i]);
    }
}
//3. Write a js program to find sum of all array elements.
var array = [50,100,135,130,140,200];
console.log("Sum of all Array");
var sum= 0;
for (i = 0; i <array.length; i++){
    sum += array[i]
}
console.log(sum);
//4. Write a js program to find maximum and minimum element in an array.
var array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
var result = findMaxMin(array);
function findMaxMin(arr) {
    // Initialize max and min variables to the first element of the array
    let max = arr[0];
    let min = arr[0];

    // Loop through each element in the array
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    // Return an object containing both max and min values
    return {
        max: max,
        min: min
    };
}
console.log("Maximum element:", result.max);
console.log("Minimum element:", result.min); 


//Write a js program to find second largest element in an array.
// Function to find the second largest element in an array
var array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
var secondLargest = findSecondLargest(array);
function findSecondLargest(arr) {
    if (arr.length < 2) {
        throw new Error("Array must contain at least two elements.");
    }

    let first = -Infinity;
    let second = -Infinity;

    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] !== first) {
            second = arr[i];
        }
    }

    // If second is still -Infinity, it means all elements were the same
    if (second === -Infinity) {
        throw new Error("There is no second largest element.");
    }

    return second;
}
console.log("Second largest element:", secondLargest); // Output: Second largest element: 6

// Write a js program to count total number of even and odd elements in an array.

// Function to count even and odd elements in an array
var array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
var result = countEvenOdd(array);
function countEvenOdd(arr) {
    // Initialize counters for even and odd numbers
    let evenCount = 0;
    let oddCount = 0;

    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenCount++; // Increment even counter if the element is even
        } else {
            oddCount++; // Increment odd counter if the element is odd
        }
    }

    // Return an object containing the counts of even and odd numbers
    return {
        even: evenCount,
        odd: oddCount
    };
}
console.log("Total even elements:", result.even); // Output: Total even elements: 3
console.log("Total odd elements:", result.odd); // Output: Total odd elements: 8

//Write a js program to count total number of negative elements in an array.

// Function to count negative elements in an array
var array = [3, -1, 4, -1, 5, -9, 2, 6, -5, 3, -5];
var result = countNegativeElements(array);
function countNegativeElements(arr) {
    // Initialize counter for negative numbers
    let negativeCount = 0;

    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeCount++; // Increment counter if the element is negative
        }
    }

    // Return the count of negative numbers
    return negativeCount;
}
console.log("Total negative elements:", result); // Output: Total negative elements: 5

//Write a js program to copy all elements from an array to another array.

// Function to copy elements from one array to another
var array1 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
var array2 = copyArray(array1);
function copyArray(sourceArray) {
    // Initialize an empty array to hold the copied elements
    let destinationArray = [];

    // Loop through each element in the source array
    for (let i = 0; i < sourceArray.length; i++) {
        // Copy each element to the destination array
        destinationArray.push(sourceArray[i]);
    }

    // Return the destination array
    return destinationArray;
}
console.log("Original array:", array1);    // Output: Original array: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
console.log("Copied array:", array2);      // Output: Copied array: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]

//9. Write a js program to insert an element in an array.
var listofNumbers= [1,5,78,8,75,58,10]
listofNumbers.splice(3,0,"50")
console.log(listofNumbers)
//10. Write a js program to delete an element from an array at specified position.
var listofNumbers= [1,5,78,8,75,58,10]
listofNumbers.splice(3,1)
console.log(listofNumbers)
//11. Write a js program to count frequency of each element in an array.

// Function to count the frequency of each element in an array
var array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
var result = countFrequency(array);
function countFrequency(arr) {
    // Initialize an empty object to hold the frequency counts
    let frequency = {};

    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // If the element is already in the frequency object, increment its count
        if (frequency[arr[i]]) {
            frequency[arr[i]]++;
        } else {
            // Otherwise, add the element to the object with a count of 1
            frequency[arr[i]] = 1;
        }
    }

    // Return the frequency object
    return frequency;
}

console.log("Frequency of each element:", result);
// Output: Frequency of each element: { '1': 2, '2': 1, '3': 2, '4': 1, '5': 3, '6': 1, '9': 1 }
