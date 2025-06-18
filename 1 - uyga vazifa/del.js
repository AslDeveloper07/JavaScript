// // //1 - MASALA

// const card = {
//   cardProducts: [
//     {
//       id: 1,
//       productName: "olma",
//       productPrice: 15000,
//       qualtity: 9,
//     },
//     {
//       id: 2,
//       productName: "olcha",
//       productPrice: 10200,
//       qualtity: 5,
//     },
//     {
//       id: 3,
//       productName: "sabzi",
//       productPrice: 55000,
//       qualtity: 2,
//     },
//     {
//       id: 4,
//       productName: "kitob",
//       productPrice: 111000,
//       qualtity: 3,
//     },
//     {
//       id: 5,
//       productName: "ruchka",
//       productPrice: 123000,
//       qualtity: 1,
//     },
//     {
//       id: 6,
//       productName: "kurtka",
//       productPrice: 15000,
//       qualtity: 1,
//     },
//     {
//       id: 7,
//       productName: "oyoq kiyim",
//       productPrice: 17000,
//       qualtity: 2,
//     },
//     {
//       id: 8,
//       productName: "soat",
//       productPrice: 15600,
//       qualtity: 1,
//     },
//   ],
//   totalAmount: 0,
//   totalProduct: 0,
//   calcTotalAmount() {
//     this.totalAmount = 0;
//     for (const item of this.cardProducts) {
//       this.totalAmount += item.productPrice * item.qualtity;
//     }
//     return `Sizning savatchangizda mahsulotlarning umumiy narxi ${this.totalAmount}`;
//   },
//   calcTotalProduct() {
//     this.totalProduct = 0;
//     for (const item of this.cardProducts) {
//       this.totalProduct += item.qualtity;
//     }
//     return `Sizning savatchangizda mahsulotlarning soni ${this.totalProduct}`;
//   },
//   increaseQuantity(id) {
//     let found = this.cardProducts.find((element) => id === element.id);
//     if (found) {
//       found.qualtity++;
//     }
//     return found ? found.qualtity : "Mahsulot topilmadi";
//   },
//   deleteQuantity() {
//     for (const item of this.cardProducts) {
//       item.qualtity = 0;
//     }
//     this.totalAmount = 0;
//     this.totalProduct = 0;
//     return "Barcha mahsulotlarning soni 0 ga tenglandi.";
//   },
//   clearQuantityId(id) {
//     let found = this.cardProducts.find((item) => item.id === id);
//     if (found) {
//       found.qualtity = 0;
//       return `ID-si ${id} bo'lgan mahsulotning soni 0 ga tenglandi.`;
//     } else {
//       return "Bunday ID-ga ega mahsulot topilmadi.";
//     }
//   },
// };

// console.log(card.calcTotalProduct());

// console.log(card.clearQuantityId(4));

// console.log(card.calcTotalProduct());

// console.log(card.calcTotalAmount());

// // //2-MASALA

// function runLengthEncode(str) {
//   if (str.length === 0) return "";

//   let result = "";
//   let count = 1;

//   for (let i = 1; i <= str.length; i++) {
//     if (str[i] === str[i - 1]) {
//       count++;
//     } else {
//       result += str[i - 1] + count;
//       count = 1;
//     }
//   }

//   return result;
// }

// //3-MASALA

// function mostFrequentChar(str) {
//   const freq = {};
//   for (let char of str) {
//     freq[char] = (freq[char] || 0) + 1;
//   }

//   let max = 0;
//   let result = "";

//   for (let char in freq) {
//     if (freq[char] > max) {
//       max = freq[char];
//       result = char;
//     }
//   }

//   return result;
// }

// // //3-MASALA

// function digitalRoot(n) {
//   while (n >= 10) {
//     n = n
//       .toString()
//       .split("")
//       .reduce((sum, d) => sum + Number(d), 0);
//   }
//   return n;
// }

// 4 - masala;
// function exampleFunction() {
//   const x = "declared inside function";
//   console.log("Inside function");
//   console.log(x);
// }

// //5 - masala

// const x = "declared outside function";

// exampleFunction();

// function exampleFunction() {
//   console.log("Inside function");
//   console.log(x);
// }

// console.log("Outside function");
// console.log(x);

// // 6 masala
// function isPalindrome(str) {
//   str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   return str === str.split("").reverse().join("");
// }
// console.log(isPalindrome("A man, a plan, a canal, Panama"));

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// function mostFrequent(arr) {
//   let counts = {};
//   let maxCount = 0,
//     result = null;

//   for (let item of arr) {
//     counts[item] = (counts[item] || 0) + 1;
//     if (counts[item] > maxCount) {
//       maxCount = counts[item];
//       result = item;
//     }
//   }
//   return result;
// }
// console.log(mostFrequent([1, 3, 1, 3, 2, 1]));

// function reverseWords(str) {
//   return str.split(" ").reverse().join(" ");
// }
// console.log(reverseWords("JavaScript is awesome"));

// function fibonacci(n) {
//   if (n < 2) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(6));

// function charCount(str) {
//   const result = {};
//   for (let char of str.toLowerCase()) {
//     if (/[a-z0-9]/.test(char)) {
//       result[char] = (result[char] || 0) + 1;
//     }
//   }
//   return result;
// }
// console.log(charCount("Hello World!"));

// function capitalizeWords(str) {
//   return str
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//     .join(" ");
// }
// console.log(capitalizeWords("hello world from js"));

// function isPrime(n) {
//   if (n <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }
// console.log(isPrime(29));

// function sumArray(arr) {
//   return arr.reduce((sum, num) => sum + num, 0);
// }
// console.log(sumArray([1, 2, 3, 4]));

// function longestWord(str) {
//   const words = str.split(" ");
//   let max = "";

//   for (let word of words) {
//     if (word.length > max.length) {
//       max = word;
//     }
//   }
//   return max;
// }

// console.log(longestWord("JavaScript is powerful language"));

// function isAnagram(str1, str2) {
//   const format = (str) =>
//     str
//       .toLowerCase()
//       .replace(/[^a-z0-9]/g, "")
//       .split("")
//       .sort()
//       .join("");
//   return format(str1) === format(str2);
// }
// console.log(isAnagram("listen", "silent"));

// function flatten(arr) {
//   return arr.flat(Infinity);
// }
// console.log(flatten([1, [2, [3, 4]], 5]));

// function digitSum(n) {
//   return n
//     .toString()
//     .split("")
//     .reduce((sum, d) => sum + parseInt(d), 0);
// }

// console.log(digitSum(12345));

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("javascript"));

// function shiftLetters(str) {
//   return str
//     .split("")
//     .map((char) => {
//       if (/[a-z]/i.test(char)) {
//         let code = char.charCodeAt(0) + 1;
//         if ((char <= "z" && code > 122) || (char <= "Z" && code > 90)) {
//           code -= 26;
//         }
//         return String.fromCharCode(code);
//       }
//       return char;
//     })
//     .join("");
// }

// console.log(shiftLetters("abc xyz"));

// function countEvenOdd(arr) {
//   let even = 0,
//     odd = 0;
//   for (let num of arr) {
//     num % 2 === 0 ? even++ : odd++;
//   }
//   return { even, odd };
// }

// console.log(countEvenOdd([1, 2, 3, 4, 5, 6]));

// function extractDigits(str) {
//   return str.replace(/\D/g, "");
// }

// console.log(extractDigits("abc123xyz"));

// function minMax(arr) {
//   return {
//     min: Math.min(...arr),
//     max: Math.max(...arr),
//   };
// }

// console.log(minMax([3, 5, 1, 9, 2]));

// function countChars(str) {
//   let upper = 0,
//     lower = 0,
//     digit = 0;
//   for (let char of str) {
//     if (/[A-Z]/.test(char)) upper++;
//     else if (/[a-z]/.test(char)) lower++;
//     else if (/[0-9]/.test(char)) digit++;
//   }
//   return { upper, lower, digit };
// }

// console.log(countChars("AbC123xyz"));

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// // ES6 dan oldin
// const combined = arr1.concat(arr2);

// function sum(a, b, c) {
//   return a + b + c;
// }
// const numbers = [1, 2, 3];
// const result = sum.apply(null, numbers);

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// ES6 dan oldin:
// const combined = Object.assign({}, obj1, obj2);

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];

// const combined = [...arr1, ...arr2];
// console.log(combined);

// function sum(a, b, c) {
//   return a + b + c;
// }

// const numbers = [1, 2, 3];
// const result = sum(...numbers);
// console.log(result);

// const fruits = ["apple", "banana", "cherry"];
// const vegetable = ["carrot", "patato", "onions"];

// const combined = [...fruits, "mango", ...vegetable];

// console.log(combined);

// function multiplay(a, b, c) {
//   return a * b * c;
// }

// const nums = [1, 2, 3];
// console.log(multiplay(...nums));

// const settings = { theme: "dark", layout: { sidebar: true } };
// const newSettings = {
//   ...settings,
//   layout: { ...settings.layout, sidebar: false },
// };
// console.log(newSettings);

// Massivlarda rest pattern
// const fruits = ["apple", "banana", "cherry", "grape"];
// const [first, second, ...restFruits] = fruits;

// console.log(first);
// console.log(second);
// console.log(restFruits);

// // Objectlarda restPattern
// const user = { name: "Asilbek", age: 17, country: "Uzbekistan" };
// const { name, ...restDetails } = user;

// console.log(name);
// console.log(restDetails);

// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3));
// console.log(sum(4, 5, 6, 7, 8));

// function sum(...theArgs) {
//   let total = 0;
//   for (const arg of theArgs) {
//     total + arg;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3));

// function multiplay(multiplayer, ...theArgs) {
//   return theArgs.map((element) => multiplayer * element);
// }
// const arr = multiplay(2, 3, 4, 76, 87);
// console.log(arr);

// function sortRestArgs(...theArgs) {
//   const sortedArgs = theArgs.sort();
//   return sortRestArgs;
// }

// console.log(sortRestArgs(2, 3, 4, 78, 9));

// function sortArgument() {
//   const sortedArgs = arguments.sort();
//   return sortedArgs; //this will never happen
// }

// console.log(sortArgument(2, 3, 4, 78, 9));

// // const name = null;
// const defaultName = "Guest";

// const userName = name ?? defaultName;

// console.log(userName);
// 5;

// const num = 0;
// const unNum = 18;

// const userAge = num ?? unNum;
// console.log(userAge);

// javascript
// CopyEdit
// obj?.property
// obj?.[property]
// obj?.method()

// let user = {
//   name: "Ali",
//   address: {
//     city: "Toshkent"
//   }
// };

// console.log(user.address?.city); // "Toshkent"
// console.log(user.contact?.phone); // undefined (xato chiqmaydi)

// let users = [];

// console.log(users[0]?.name); // undefined

// let user = {
//   sayHi: () => console.log("Salom!"),
// };

// user.sayHi?.(); // Salom!
// user.sayBye?.(); // hech nima bo‘lmaydi, xato ham chiqmaydi

// let user = {
//   profile: {
//     settings: {
//       theme: "dark",
//     },
//   },
// };

// console.log(user?.profile?.settings?.theme); // "dark"
// console.log(user?.profile?.preferences?.color); // undefined

// let emptyUser = {};

// let theme = emptyUser.settings?.theme ?? "light";
// console.log(theme); // "light"

// const users = [
//   {
//     id: 1,
//     name: "Sardor",
//     settings: {
//       theme: "dark",
//       notifications: {
//         email: true,
//         sms: false,
//       },
//     },
//   },
//   {
//     id: 2,
//     name: "Ali",
//     settings: {
//       notifications: {
//         sms: true,
//       },
//     },
//   },
//   {
//     id: 3,
//     name: "Vali",
//   },
// ];

// const userData = users.map(man => {
//   return {
//     ...man,
//     settings: {
//       theme: man.settings?.theme ?? "light",
//       notifications: {
//         email: man.settings?.notifications?.email ?? false,
//         sms: man.settings?.notifications?.sms ?? false,
//       },
//     },
//   };
// });

// console.log(userData);

// const products = [
//   {
//     id: 1,
//     name: "Laptop",
//     config: {
//       cpu: "Intel i7",
//       ram: "16GB",
//       extras: {
//         warranty: true,
//         bag: false,
//       },
//     },
//   },
//   {
//     id: 2,
//     name: "Tablet",
//     config: {
//       extras: {
//         bag: true,
//       },
//     },
//   },
//   {
//     id: 3,
//     name: "Monitor",
//     // config yo'q
//   },
// ];

// const laptopManager = products.map((laptop) => ({
//   ...laptop,
//   config: {
//     cpu: laptop.config?.cpu ?? "intel i7 14000HK",
//     ram: laptop.config?.ram ?? "32GB",
//     extras: {
//       warranty: laptop.config?.extras?.warranty ?? false,
//       bag: laptop.config?.extras?.bag ?? false,
//     },
//   },
// }));

// console.log(laptopManager);

// const books = [
//   {
//     id: 1,
//     title: "JavaScript Basics",
//     details: {
//       author: "John Doe",
//       publish: {
//         year: 2020,
//         country: "USA",
//       },
//     },
//   },
//   {
//     id: 2,
//     title: "Learning CSS",
//     details: {
//       publish: {
//         country: "UK",
//       },
//     },
//   },
//   {
//     id: 3,
//     title: "HTML5 Guide",
//     // details mavjud emas
//   },
// ];

// const bookers = books.map((book) => ({
//   ...book,
//   details: {
//     author: book.details?.author ?? "Unknown author",
//   },
//   publish: {
//     year: book.publish?.year ?? 2000,
//     country: book.publish?.country ?? "unknown",
//   },

// }));


// console.log(bookers);



function sumToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumToN(10)); // 55


function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([3, 10, 5, 8])); // 10

function reverseArray(arr) {
  return arr.reverse();
}
console.log(reverseArray([1, 2, 3])); // [3, 2, 1]



function isPalindrome(str) {
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}
console.log(isPalindrome("madam")); // true



function countEven(arr) {
  return arr.filter(num => num % 2 === 0).length;
}
console.log(countEven([1, 2, 3, 4, 6])); // 3



function fibonacci(n) {
  let result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result.slice(0, n);
}
console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]



function uniqueArray(arr) {
  return [...new Set(arr)];
}
console.log(uniqueArray([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]


function mergeArrays(a, b) {
  return [...a, ...b];
}
console.log(mergeArrays([1, 2], [3, 4])); // [1, 2, 3, 4]


function squareElements(arr) {
  return arr.map(x => x * x);
}
console.log(squareElements([2, 3, 4])); // [4, 9, 16]



function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels("education")); // 5


function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7)); // true


function extractLetters(str) {
  return str.replace(/[^a-zA-Z]/g, '');
}
console.log(extractLetters("abc123!@#")); // "abc"


function includesElement(arr, item) {
  return arr.includes(item);
}
console.log(includesElement([1, 2, 3], 2)); // true


function indexMap(arr) {
  return arr.map((item, index) => `${index}: ${item}`);
}
console.log(indexMap(['a', 'b', 'c'])); // ['0: a', '1: b', '2: c']


function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    console.log(output || i);
  }
}
fizzBuzz();


function stringLength(str) {
  return str.length;
}
console.log(stringLength("JavaScript")); // 10


function findMin(arr) {
  return Math.min(...arr);
}
console.log(findMin([4, 1, 9])); // 1



function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates([1, 2, 2, 3])); // [1, 2, 3]


function average(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}
console.log(average([10, 20, 30])); // 20


function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize("hello")); // Hello


function countPositive(arr) {
  return arr.filter(n => n > 0).length;
}
console.log(countPositive([-1, 3, 5, 0, -2])); // 2


function digitSum(n) {
  return n.toString().split('').reduce((sum, d) => sum + +d, 0);
}
console.log(digitSum(1234)); // 10


function digitSum(n) {
  return n.toString().split('').reduce((sum, d) => sum + +d, 0);
}
console.log(digitSum(1234)); // 10


function hasValue(obj, value) {
  return Object.values(obj).includes(value);
}
console.log(hasValue({a: 1, b: 2}, 2)); // true


function countLetters(str) {
  return str.toLowerCase().replace(/[^a-z]/g, '').length;
}
console.log(countLetters("Hello 123!")); // 5



function mostFrequentChar(str) {
  let map = {};
  for (let char of str) {
    map[char] = (map[char] || 0) + 1;
  }
  let maxChar = '', maxCount = 0;
  for (let char in map) {
    if (map[char] > maxCount) {
      maxChar = char;
      maxCount = map[char];
    }
  }
  return maxChar;
}
console.log(mostFrequentChar("hello world")); // l


function wordCount(str) {
  return str.trim().split(/\s+/).length;
}
console.log(wordCount("Hello world from JavaScript")); // 4


function toBinary(n) {
  return n.toString(2);
}
console.log(toBinary(10)); // "1010"


function randomElement(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
console.log(randomElement([10, 20, 30, 40])); // tasodifiy son


function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}
console.log(sortByLength(["cat", "elephant", "dog"])); // ["cat", "dog", "elephant"]


function getPrimes(n) {
  let primes = [];
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }
  return primes;
}
console.log(getPrimes(20)); // [2, 3, 5, 7, 11, 13, 17, 19]


function capitalizeWords(str) {
  return str.split(' ').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ');
}
console.log(capitalizeWords("hello world")); // "Hello World"

