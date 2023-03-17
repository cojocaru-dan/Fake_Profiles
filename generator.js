import {firstNames, lastNames, jobs} from "./data.js";

// 1
function phoneNumberGenerator() {
  const num = Math.floor(Math.random() * 1000000000);
  return "+" + num.toFixed();
}

console.log(phoneNumberGenerator());

// 2
function emailGenerator(fName, lName) {
  return `${fName}.${lName}@gmail.com`;
}

console.log(emailGenerator("Garrison", "Davies"));

// 3
function randomFromList(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

console.log(randomFromList(["mark", "stewart", "robin"]));

// 4
function profileGenerator(firstN, lastNArray, jobsArray, randomFLFunc, phoneNGFunc, emailGFunc) {
  const fakeP = {
    name: {
      first: firstN,
      last: randomFLFunc(lastNArray)
    },
    job: randomFLFunc(jobsArray),
    phone: phoneNGFunc(),
    email: ''
  };
  fakeP.email = emailGFunc(fakeP.name.first, fakeP.name.last);

  return fakeP;
}

console.log(profileGenerator("stewie", lastNames, jobs, randomFromList, phoneNumberGenerator, emailGenerator));

// 5
const fakeProfiles = [];

firstNames.forEach(function(firstName) {
  const newProfile = profileGenerator(firstName, lastNames, jobs, randomFromList, phoneNumberGenerator, emailGenerator);
  setTimeout(() => fakeProfiles.push(newProfile), 500);
}
)
console.log(fakeProfiles.slice(0, 3), fakeProfiles.length);
setTimeout(() => console.log(fakeProfiles.slice(0, 3), fakeProfiles.length), 1000);

// DO NOT MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
    toExport = [
        { name: "phoneNumberGenerator", content: phoneNumberGenerator, type: "function" },
        { name: "emailGenerator", content: emailGenerator, type: "function" },
        { name: "randomFromList", content: randomFromList, type: "function" },
        { name: "profileGenerator", content: profileGenerator, type: "function" },
        { name: "fakeProfiles", content: fakeProfiles, type: "array" },
    ]
} catch (error) {
    toExport = { error: error.message }
}

export { toExport }
