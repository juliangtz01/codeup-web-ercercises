const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
// console.log(users);
const theLanguages = users.filter(n => n.languages.length <= 3);
console.log(theLanguages); // [2, 4, 6, 8, 10]

//3. Use .map to create an array of strings where each element is a user's email address

const userEmail = users.map(n => n.email)
console.log(userEmail);

//4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const totalYears = users.reduce((total, person) => {
    return total + person.yearsOfExperience;
}, 0)

let average = totalYears / users.length
//
// console.log(totalYears);
//
// console.log(users.length);

console.log(average);

//5. Use .reduce to get the longest email from the list of users.


const longestEmail = users.reduce((a, b) =>{
    return (a.length < b.email.length) ? b.email : a;
}, users[0].email);

console.log(longestEmail);

//6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const userNames = users.reduce((accumulator, currentName) => {

    return currentName.name !== 'justin' ? accumulator + currentName.name + ", " : accumulator + currentName.name + ".";

}, '')

console.log(userNames);

//Bonus: Use .reduce to get the unique list of languages from the list of users.
let newArray = [];

const uniqueLang = users.reduce((accumulator, currentLang) => {
    newArray =  [...accumulator, ...currentLang.languages];

    return [...new Set(newArray)];
}, [])

console.log(uniqueLang);

