"use strict";
let guestList = ["Zamaan Khan", "Rehan Asif", "Umair Gujjar"];
let guestWhocantmakeit = "Umair Gujjar";
// Step 1
console.log(`${guestWhocantmakeit} can't make it to dinner.`);
// Step 2
let newGuest = "Asad Raza";
let indexofguestWhocantmakeit = guestList.indexOf(guestWhocantmakeit);
//if (indexofguestWhocantmakeit !== -1){
guestList[indexofguestWhocantmakeit] = newGuest;
//console.log(guestList[2])
// Step 3
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are warmly invited to the dinner.`);
});
