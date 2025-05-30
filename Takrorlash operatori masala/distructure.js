// const userProfile = {
//   id: 10245,
//   name: {
//     first: "Ali",
//     last: "Karimov",
//     getFullName() {
//       return `${this.first} ${this.last}`;
//     },
//   },
//   contact: {
//     email: "ali.karimov@example.com",
//     phone: "+998901234567",
//     address: {
//       country: "Uzbekistan",
//       city: "Tashkent",
//       street: "Buyuk Ipak Yo'li",
//       zipCode: 100100,
//     },
//   },
//   isActive: true,
//   skills: [
//     { name: "HTML", level: "advanced" },
//     { name: "CSS", level: "advanced" },
//     { name: "JavaScript", level: "intermediate" },
//     { name: "Node.js", level: "beginner" },
//   ],
//   projects: [
//     {
//       title: "Portfolio Website",
//       year: 2024,
//       technologies: ["HTML", "CSS", "JavaScript"],
//       completed: true,
//     },
//     {
//       title: "To-Do App",
//       year: 2025,
//       technologies: ["React", "Tailwind CSS"],
//       completed: false,
//     },
//   ],
//   loginHistory: [
//     { date: "2025-05-01", location: "Tashkent" },
//     { date: "2025-05-10", location: "Samarkand" },
//   ],
//   getSkillNames() {
//     return this.skills.map((skill) => skill.name).join(", ");
//   },
//   addSkill(skillName, level) {
//     this.skills.push({ name: skillName, level });
//   },
// };

// // Distructure in JavaScript

// const {
//   id: useId,
//   name: userName,
//   contact: userContact,
//   isActive: userIsActive,
//   skills: userSkills,
//   projects: userProjects,
//   loginHistory: userLoginHistory,
//   getSkillNames,
//   addSkill,
// } = userProfile;

// const {
//   first: userFirstName,
//   last: userLastName,
//   getFullName: getUserFullName,
// } = userName;

// const {
//   email: userEmail,
//   phone: userPhone,
//   address: userAddress,
// } = userContact;

// const {
//   country,
//   city,
//   street,
//   zipCode,
// } = userAddress;

// const [htmlSkill, cssSkill, jsSkill, nodeSkill] = userSkills;

// const {
//   name,
//   level,
// } = htmlSkill;
// const {
//   name: cssSkillName,
//   level: cssSkillLevel,
// } = cssSkill;
// const {
//   name: jsSkillName,
//   level: jsSkillLevel,
// } = jsSkill;
// const {
//   name: nodeSkillName,
//   level: nodeSkillLevel,
// } = nodeSkill;

// const [projectOne, projectTwo] = userProjects;

// const {
//   title: projectOneTitle,
//   year: projectOneYear,
//   technologies: projectOneTechs,
//   completed: projectOneCompleted,
// } = projectOne;

// const {
//   title,
//   year,
//   technologies,
//   completed,
// } = projectTwo;

// const [login1, login2] = userLoginHistory;
// const { date: login1Date, location: login1Location } = login1;
// const { date: login2Date, location: login2Location } = login2;

// // ishlatish

// console.log(useId);
// console.log(userFirstName);
// console.log(userLastName);
// console.log(getUserFullName());
// console.log(userIsActive);
// console.log(userEmail);
// console.log(userPhone);
// console.log(country);
// console.log(city);
// console.log(street);
// console.log(zipCode);
// console.log(name);
// console.log(level);
// console.log(cssSkillName);
// console.log(cssSkillLevel);
// console.log(jsSkillName);
// console.log(jsSkillLevel);
// console.log(nodeSkillName);
// console.log(nodeSkillLevel);
// console.log(projectOneTitle);
// console.log(projectOneYear);
// console.log(projectOneTechs);
// console.log(projectOneCompleted);
// console.log(title);
// console.log(year);
// console.log(technologies);
// console.log(completed);
// console.log(login1Date);
// console.log(login1Location);
// console.log(login2Date);
// console.log(login2Location);

// // uyga vazifa arrayni distructuring qilish

// const complexArray = [
//   "hello",
//   123,
//   false,
//   null,
//   undefined,
//   {
//     id: 101,
//     name: "Sardorbek",
//     age: 22,
//     isStudent: true,
//     hobbies: ["reading", "coding", { type: "sport", name: "football" }],
//     address: {
//       country: "Uzbekistan",
//       city: "Tashkent",
//       zip: 100000,
//     },
//   },
//   ["nested", 99, [true, null, ["deep", 88]]],
//   function (a, b) {
//     return a + b;
//   },
//   {
//     calculate: function (x) {
//       return x * x;
//     },
//     description: "This is a function inside object",
//   },
// ];

// // Destructuring asosiysi
// const [
//   string,
//   number,
//   boolean,
//   nul,
//   undefineded,
//   user,
//   nestedArray,
//   sumFunction,
//   functionObject,
// ] = complexArray;

// // userni distructuresi
// const { id, name, age, isStudent, hobbies, address } = user;

// const [hobby1, hobby2, hobby3] = hobbies;
// const { type, name: sportName } = hobby3;

// const { country, city, zip } = address;

// // nastedArrayniki
// const [nestedString, nestedNumber, deepArray] = nestedArray;
// const [deepBoolean, deepNull, deepNestedArray] = deepArray;
// const [deepString, deepNumber] = deepNestedArray;

// // func objectniki
// const { calculate, description } = functionObject;
// const {calculates,descriptions}=functionObject  //uchiriladi
// const { countrys, citys, zips } = address; //uchiriladi

// // console.log ga chaqirish

// console.log(string);
// console.log(number);
// console.log(boolean);
// console.log(nul);
// console.log(undefineded);
// console.log(user);
// console.log(nestedArray);
// console.log(sumFunction);
// console.log(functionObject);

// console.log(id);
// console.log(name);
// console.log(age);
// console.log(isStudent);
// console.log(hobbies);
// console.log(address);

// console.log(hobby1);
// console.log(hobby2);
// console.log(hobby3);
// console.log(type);
// console.log(sportName);

// console.log(country);
// console.log(city);
// console.log(zip);

// console.log(nestedString);
// console.log(nestedNumber);
// console.log(deepArray);
// console.log(deepBoolean);
// console.log(deepNull);
// console.log(deepNestedArray);
// console.log(deepString);
// console.log(deepNumber);

// const element = document.getElementById("elementID");
// element.innerHTML = `<h1>hello world</h1>`;

// const clickBtn = () => {
//   console.log("sichqoncha 2 marta bosilganda men chiqdim");
// };
// const btn = document.getElementById("btn");
// btn.addEventListener("dblclick", clickBtn);

// document.addEventListener("keydown", (event) => {
//   console.log("key" + event.key);
//   console.log("code" + event.code);
// });

// let text = "Hello, world!";
// let result = text.indexOf("orld");
// console.log(result);  // 7

// let text = "Hello, world! Hello!";
// let result = text.indexOf("Hello", 5);
// console.log(result);  // 13

// let text = "Hello, world! Hello!";
// let result = text.lastIndexOf("Hello");
// console.log(result);  // 13

// let numbers = [1, 2, 3, 4, 5];
// let found = numbers.find(num => num < 3);

// // console.log(found); // 4 (birinchi element shartga mos keladi)
// let users = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Olim" },
//   { id: 3, name: "Tayir" }
// ];
// let foundUser = users.find(user => user.id === 2);

// console.log(foundUser); // { id: 2, name: "Olim" }
// let numbers = [1, 2, 3, 4];
// let doubled = numbers.map(num => num * 2);

// console.log(doubled); // [2, 4, 6, 8]
// let users = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Olim" },
//   { id: 3, name: "Tayir" }
// ];
// let userNames = users.map(user => user);

// console.log(userNames); // ["Ali", "Olim", "Tayir"]
// let numbers = [1, 2, 3, 4, 5];
// let evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers); // [2, 4]
// let users = [
//   { id: 1, name: "Ali", age: 25 },
//   { id: 2, name: "Olim", age: 18 },
//   { id: 3, name: "Tayir", age: 30 }
// ];
// let adults = users.filter(user => user.age >= 21);

// console.log(adults);
// // [{ id: 1, name: "Ali", age: 25 }, { id: 3, name: "Tayir", age: 30 }]

// const locations = [
//     { country: "Uzbekistan", city: "Tashkent" },
//     { country: "Uzbekistan", city: "Samarkand" },
//     { country: "Uzbekistan", city: "Tashkent" },
//     { country: "USA", city: "New York" },
//     { country: "USA", city: "Chicago" },
//   ];

//   // 1. Set orqali dublikatlarni olib tashlaymiz
//   const uniqueSet = new Set(
//     locations.map(lokatsiya => `${lokatsiya.country}-${lokatsiya.city}`)
//   );

//   // 2. Setdan massivga qayta obyekt holatida o‘tkazamiz
//   const uniqueLocations = Array.from(uniqueSet).map(str => {
//     const [country, city] = str.split("-");
//     return { country, city };
//   });

//   console.log(uniqueLocations);

// const reactions = [
//     { user: "Ali", postId: 1 },
//     { user: "Vali", postId: 1 },
//     { user: "Ali", postId: 2 },
//     { user: "Sami", postId: 1 },
//     { user: "Ali", postId: 1 },
//   ];

//   const reaction = new Set(
//     reactions.map((react) => `${react.user}-${react.postId}`)
//   );

//   const reaksiya = Array.from(reaction).map((reaksiyaa) => {
//     const [user, postId] = reaksiyaa.split("-");
//     return { user, postId: Number(postId) };
//   });

//   console.log(reaksiya);

// const locations = [
//   { country: "Uzbekistan", city: "Tashkent" },
//   { country: "Uzbekistan", city: "Samarkand" },
//   { country: "Uzbekistan", city: "Tashkent" },
//   { country: "USA", city: "New York" },
//   { country: "USA", city: "Chicago" },
// ];

// const locationMap = new Map();

// locations.forEach(({ country, city }) => {
//   //   console.log(country, city);
//   if (!locationMap.has(country)) {
//     locationMap.set(country, new Set());
//   }
//   locationMap.get(country).add(city);
// });

// console.log(locationMap);

const reactions = [
  { user: "Ali", postId: 1 },
  { user: "Vali", postId: 1 },
  { user: "Ali", postId: 2 },
  { user: "Sami", postId: 1 },
  { user: "Ali", postId: 1 },
];

const reactionsMap = new Map();

reactions.forEach(({ user, postId }) => {
  if (!reactionsMap.has(user)) {
    reactionsMap.set(user, new Set());
  }
  reactionsMap.get(user).add(postId);
});

console.log(reactionsMap);
