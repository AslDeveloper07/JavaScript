

//1 - MASALA

let onlyString = "Asilbek ";
let result = "";

for (let i = 0; i < 3; i++) {
    result += onlyString;
}

console.log(result);


//2 - MASALA

let originalString = "Hello";
let charCount = {};

for (let char of originalString) {
    if (charCount[char]) {
        charCount[char]++;
    } else {
        charCount[char] = 1;
    }
}

console.log(charCount);


//3 - MASALA

let originalString = "assalomu alaykum akajon yaxshimisiz";
let result = "";

for (let i = 0; i < originalString.length; i++) {
    if (originalString[i] !== 'a') {
        result += originalString[i];
    }
}

console.log(result);

//4 - MASALA

let input = "Asilbek09w89Suvonov83928r";
let result = "";

for (let i = 0; i < input.length; i++) {
    if (input[i] >= '0' && input[i] <= '9') {
        result += input[i];
    }
}

console.log(result);


//5 - MASALA


let text = "bugun tabiat juda chiroyli va Navruz bayrami bulyabdi";
let misol = 0;

for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
        misol++;
    }
}

console.log(misol);


//6  - MASALA

let text = "Assalomu alaykum!";
let teskariStr = '';

for (let i = text.length - 1; i >= 0; i--) {
    teskariStr += text[i];
}

console.log(teskariStr);


//7 - MASALA

let input = "abc123def";
let letters = "";
let numbers = "";

for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if (char >= 'a' && char <= 'z') {
        letters += char;
    } else if (char >= '0' && char <= '9') {
        numbers += char;
    }
}

console.log("Letters: " + letters + ", Numbers: " + numbers);

//8 - MASALA

let input = "Salom men Asilbekman";
let natija = "";
let soz = "";
let counter = 1;

for (let i = 0; i < input.length; i++) {
    if (input[i] !== ' ') {
        soz += input[i];
    } else {
        natija += counter + ". " + soz + " ";
        counter++;
        soz = "";
    }
}

if (soz !== "") {
    natija += counter + ". " + soz;
}

console.log(natija);

//9 - MASALA

let input = "abc";
let output = "";

for (let i = 0; i < input.length; i++) {
    if (input[i] === 'a') {
        output += 'b';
    } else {
        output += input[i];
    }
}

console.log(output);

//10 - MASALA


let input = "salom mening ismim Asilbek";
let uzunSoz = "";
let qisqaSoz = "";

for (let i = 0; i <= input.length; i++) {

    if (i === input.length || input[i] === ' ') {
        if (qisqaSoz.length > uzunSoz.length) {
            uzunSoz = qisqaSoz;
        }
        qisqaSoz = "";
    } else {
        qisqaSoz += input[i];
    }
}

console.log(uzunSoz);

//11 - MASALA

let input = "madam";
let palindrome = true;

for (let i = 0; i < Math.floor(input.length / 2); i++) {
    if (input[i] !== input[input.length - 1 - i]) {
        palindrome = false;
        break;
    }
}

console.log(palindrome);

//12 -MASALA

let suzlar = "FKSJHFJ290890183RHWEI98234928EDJSED3R928E";
let result = 0;

for (let i = 0; i < suzlar.length; i++) {
    let char = suzlar[i];
    if (char >= '0' && char <= '9') {
        result += parseInt(char);
    }
}

console.log(result);

//1 -masala

let fruits=["olma", "nok", "shaftoli", "uzum"]
fruits.push("anor", "behi")
console.log(fruits);

//2-MASALA


let vegetable=["sabzi", "sholgom", "piyoz", "karam"]
vegetable.pop("chisnok", "kartoshka")
console.log(vegetable);

//3-MASALA

let freinds=["Doston", "Bobur", "Temur", "Maqsad"]
freinds.unshift("Jonibek", "Otabek")
console.log(freinds);

//4-MASALA

let array = [10, 20, 30, 40];
let firstElement = array[0];
console.log(firstElement);

5-MASALA

let array = [10, 20, 30, 40];
let firstElement = array[3];
console.log(firstElement);

//6-MASALA

let str = "Salom";
let oxirgisi = str.slice(-1);
console.log(oxirgisi);

//7- MASALA

for (let i = 2; i < 100; i++) {
    let tub = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        tub = false;
        break;
      }
    }
    if (tub) {
      console.log(i);
    }
  }

//8 -MASALA

for (let i = 10; i <= 99; i++) {
    let a = Math.floor(i / 10);
    let b = i % 10;
    if (a + b === 10) {
      console.log(i);
    }
  }

//9 -MASALA

let num = 1234;
let str = num.toString();
let reverse = '';
for (let i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
}
console.log(reverse);


//10 -MASALA

let arr = [9, 2, 11, 4, 7, 8];
let min = Infinity;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0 && arr[i] < min) {
    min = arr[i];
  }
}
console.log(`Eng kichik juft son: ${min}`);



//11 -MASALA

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
  }

//12 -MASALA

for (let i = 10; i < 1000; i++) {
    let str = i.toString();
    let rev = str.split('').reverse().join('');
    if (str === rev) {
      console.log(i);
    }
  }

//12 -MASALA

let arr = [-3, 4, 7, -1, 0, 5];
let count = 0, sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    count++;
    sum += arr[i];
  }
}
console.log(`Musbatlar soni: ${count}, yig'indisi: ${sum}`);

//13 -MASALA
let n = 5;
for (let i = 1; i <= n; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '*';
  }
  console.log(row);
}

//14 -MASALA
for (let i = 1; i <= 1000; i++) {
    let sum = 0;
    let num = i;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    if (sum % 5 === 0) {
      console.log(i);
    }
  }

//15 -MASALA
let text = "Salom dunyo!";
let vowels = "aeiouAEIOU";
let result = '';
for (let i = 0; i < text.length; i++) {
  if (vowels.includes(text[i])) {
    result += text[i];
  }
}
console.log(`Unli harflar: ${result}`);

//16 -MASALA
let n = 100;
for (let i = 1; i <= n; i++) {
  if (i % 3 === 0 || i % 7 === 0) {
    console.log(i);
  }
}

//17 -MASALA
let arr = [3, -5, 2, -7, 0, 8, -1];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) count++;
}
console.log(`Manfiy sonlar: ${count}`);

//18 -MASALA
let num = 1234;
let sum = 0;
for (let digit of num.toString()) {
  sum += parseInt(digit);
}
console.log(sum);

//19 -MASALA
let str = "Assalomu alaykum";
let count = 0;
let vowels = "aeiouAEIOU";
for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) count++;
}
console.log(`Unli harflar soni: ${count}`);

//21 -MASALA
let arr = [2, 3, 4];
let result = [];
for (let i = 0; i < arr.length; i++) {
  result.push(arr[i] ** 2);
}
console.log(result);

//22 -MASALA
let arr = [5, 10, 15];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
let avg = sum / arr.length;
console.log(`O‘rtacha: ${avg}`);

//23 -MASALA
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0 && i % 3 === 0) console.log(i);
  }

//24 -MASALA
let text = "hello";
for (let i = 0; i < text.length; i++) {
  console.log(`${text[i]}: ${text.charCodeAt(i)}`);
}

//25 -MASALA
let n = 29;
let isPrime = true;
if (n < 2) isPrime = false;
for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime ? "Tub" : "Tub emas");

//26 -MASALA
let arr = [0, 1, 0, 3, 0, 5];
let zeroCount = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) zeroCount++;
}
console.log(`0 lar soni: ${zeroCount}`);

//27 -MASALA
let str = "Salom DUNYO!";
let result = '';
for (let i = 0; i < str.length; i++) {
  if (str[i] >= 'A' && str[i] <= 'Z') {
    result += str[i];
  }
}
console.log(result);

//28 -MASALA

for (let i = 10; i <= 99; i++) {
    let a = Math.floor(i / 10);
    let b = i % 10;
    console.log(`${i}: ${a} va ${b}`);
  }

//29 -MASALA

let N = 10;
let sum = 0;
for (let i = 1; i <= N; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log("Juft sonlar yig'indisi:", sum);


//30 -MASALA

let N = 7;
let product = 1;
for (let i = 1; i <= N; i++) {
  if (i % 2 !== 0) {
    product *= i;
  }
}
console.log("Toq sonlar ko'paytmasi:", product);

//31 -MASALA
let N = 12;
for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    console.log(i);
  }
}

//32 -MASALA
let N = 20;
let count = 0;
for (let i = 1; i <= N; i++) {
  if (i % 3 === 0) {
    count++;
  }
}
console.log("3 ga karrali sonlar soni:", count);

//33 -MASALA
let arr = [3, 15, 7, 8, 20];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log("Eng katta son:", max);

//34 -MASALA

let arr = [-5, 2, -1, 4, -9, 3];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    count++;
  }
}
console.log("Manfiy sonlar soni:", count);

//35 -MASALA

function findDuplicates(arr) {
  let seen = {};
  let duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      duplicates.push(arr[i]);
    } else {
      seen[arr[i]] = true;
    }
  }
  return duplicates;
}

console.log(findDuplicates([1, 2, 3, 4, 2, 5, 3, 6]));

//36 -MASALA

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(17)); // true

//37 -MASALA

function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("salom")); // "molas"

//38 -MASALA

function secondLargest(arr) {
  let max = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num > second && num !== max) {
      second = num;
    }
  }
  return second;
}

console.log(secondLargest([10, 20, 40, 30, 40])); // 30

//39 -MASALA
function fibonacci(n) {
  let a = 0, b = 1, temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return n ? b : 0;
}

console.log(fibonacci(7)); // 13

//40 -MASALA

function mostFrequentChar(str) {
  let freq = {}, maxChar = '', maxCount = 0;
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
    if (freq[char] > maxCount) {
      maxCount = freq[char];
      maxChar = char;
    }
  }
  return maxChar;
}

console.log(mostFrequentChar("banana")); // "a"

//41 -MASALA
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4])); // 10

//42 -MASALA

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

console.log(countVowels("Salom dunyo")); // 4

//43 -MASALA

function oddNumbers(n) {
  let result = [];
  for (let i = 1; i <= n; i += 2) {
    result.push(i);
  }
  return result;
}

console.log(oddNumbers(10)); // [1, 3, 5, 7, 9]

//44 -MASALA

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

console.log(findMin([5, 2, 8, 1, 9])); // 1

//45 -MASALA

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5)); // 120

//46 -MASALA

function charCount(str) {
  let count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}

console.log(charCount("hello")); // { h: 1, e: 1, l: 2, o: 1 }

//47 -MASALA

function toCamelCase(str) {
  let words = str.split(" ");
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join("");
}

console.log(toCamelCase("hello world example")); // "helloWorldExample"

//48 -MASALA

function countEven(arr) {
  let count = 0;
  for (let num of arr) {
    if (num % 2 === 0) count++;
  }
  return count;
}

console.log(countEven([1, 2, 3, 4, 5, 6])); // 3

//49 -MASALA

function sortLetters(str) {
  return str.split('').sort().join('');
}

console.log(sortLetters("javascript")); // "aacijprstv"

//50 -MASALA

function average(arr) {
  let sum = 0;
  for (let num of arr) sum += num;
  return sum / arr.length;
}

console.log(average([10, 20, 30])); // 20

//51 -MASALA

function extractLetters(str) {
  let result = '';
  for (let char of str) {
    if (/[a-zA-Z]/.test(char)) result += char;
  }
  return result;
}

console.log(extractLetters("h3ll0_w0rld!")); // "hllwrld"

//52 -MASALA

function firstUniqueChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
}

console.log(firstUniqueChar("aabbcddee")); // "c"

//53 -MASALA

function getNegatives(arr) {
  let result = [];
  for (let num of arr) {
    if (num < 0) result.push(num);
  }
  return result;
}

console.log(getNegatives([-1, 5, -3, 7, -2])); // [-1, -3, -2]

//54 -MASALA

function commonElements(arr1, arr2) {
  let result = [];
  for (let item of arr1) {
    if (arr2.includes(item) && !result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

console.log(commonElements([1, 2, 3], [2, 3, 4])); // [2, 3]

//55 -MASALA
//56 -MASALA
//57 -MASALA
//58 -MASALA
//59 -MASALA


