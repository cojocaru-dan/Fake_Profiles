import {firstNames, lastNames, jobs} from "./data.js";


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
