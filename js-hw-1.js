//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];
function findWords(array, string) {
  for (let i = 0; i < array.length; i++) {
    if (string.search(array[i]) > 0) {
      console.log("Matched Dog Name");
    } else {
      console.log("No matches");
    }
  }
}
findWords(dog_names, dog_string);
console.log("Above is the answer to exercise 1 ^^");

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

console.log(
  "Below are my two responses for exercise 2. 1 with Splice, One without"
);

let array3 = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];

function replaceEven(arr) {
  let array4 = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      array4.splice(i, 1, "even index");
    } else {
      array4.push(arr[i]);
    }
  }
  console.log("With splice:", array4);
}

replaceEven(array3);

let array1 = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];

function replaceEvens(arr) {
  let array2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      array2.push("even index");
    } else {
      array2.push(arr[i]);
    }
  }
  console.log("Without splice:", array2);
}

replaceEvens(array1);

// Expected output
// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
