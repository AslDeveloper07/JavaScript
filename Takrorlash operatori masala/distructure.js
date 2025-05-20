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