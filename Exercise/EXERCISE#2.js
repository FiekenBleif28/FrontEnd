//NAMA: BRAIN GLISTEN LAKSANDER


//ARRAY
let people = ["Alex", "Bella", "Chris", "Diana"];

// 1. Using a for-loop
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// 2. Using forEach()
people.forEach(function(person) {
    console.log(person);
});

// 3. Remove "Alex"
people.shift();
console.log(people); // ["Bella", "Chris", "Diana"]

// 4. Remove "Diana"
people.pop();
console.log(people); // ["Bella", "Chris"]

// 5. Add "Ethan" to the front
people.unshift("Ethan");
console.log(people); // ["Ethan", "Bella", "Chris"]

// 6. Add your name to the end
people.push("Kia");
console.log(people); // ["Ethan", "Bella", "Chris", "Kia"]

// 7. For-loop, stop after "Bella"
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Bella") {
        break; // keluar dari loop setelah "Bella"
    }
}

// 8. Make a copy (without "Ethan" and "Bella")
let copy = people.slice(2);
console.log(copy); // ["Chris", "Kia"]

// 9. Redefine and use splice
people = ["Ethan", "Bella", "Chris", "Kia"];
people.splice(2, 1, "Fiona", "George");
console.log(people); 
// ["Ethan", "Bella", "Fiona", "George", "Kia"]

// 10. Concatenate with "Henry"
let withBob = people.concat("Henry");
console.log(withBob); 
// Final Result: ["Ethan", "Bella", "Fiona", "George", "Kia", "Henry"]



//OBJECT
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// 1. Add "Go"
programming.languages.push("Go");
console.log(programming.languages);

// 2. Change difficulty to 7 (bracket notation)
programming["difficulty"] = 7;
console.log(programming.difficulty);

// 3. Remove "jokes" key
delete programming.jokes;
console.log(programming);

// 4. Add "isFun: true"
programming.isFun = true;
console.log(programming);

// 5. map() with index
programming.languages.map((lang, index) => {
    console.log(${index} - ${lang});
});