//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];

function findWords(){
    for(dog_names of dog_names){
        if ((dog_string.toLowerCase()).includes(dog_names.toLowerCase())){
            console.log('Matched dog_names');
        } else {
            console.log('No Matches');
    };
};
};

//Call method here with parameters
findWords();


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];
let arr2 = [];

function replaceEvens(){
    for(let i = 2; i<(arr.length + 2); i++){
        if (i % 2 === 0){
            arr2.push("even index")
        }else{arr2.push(arr[i-2])};
            };
        console.log(arr2)};


replaceEvens()

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



// code wars problems

// Convert boolean values to strings 'Yes' or 'No'.
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
    if (bool) {
      return 'Yes';
    } else {
      return 'No';
    }
  };


//   Even or Odd
// Create a function that takes an integer 
// as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
      };
    console.log(evenOrOdd);
