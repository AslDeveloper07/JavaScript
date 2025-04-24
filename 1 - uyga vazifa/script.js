//1 - MASALA

// let onlyString = "Asilbek ";
// let result = "";

// for (let i = 0; i < 3; i++) {
//     result += onlyString;
// }

// console.log(result);


//2 - MASALA

// let originalString = "Hello";
// let charCount = {};

// for (let char of originalString) {
//     if (charCount[char]) {
//         charCount[char]++;
//     } else {
//         charCount[char] = 1;
//     }
// }

// console.log(charCount);


//3 - MASALA

// let originalString = "assalomu alaykum akajon yaxshimisiz";
// let result = "";

// for (let i = 0; i < originalString.length; i++) {
//     if (originalString[i] !== 'a') {
//         result += originalString[i];
//     }
// }

// console.log(result);

//4 - MASALA

// let input = "Asilbek09w89Suvonov83928r";
// let result = "";

// for (let i = 0; i < input.length; i++) {
//     if (input[i] >= '0' && input[i] <= '9') {
//         result += input[i];
//     }
// }

// console.log(result);


//5 - MASALA


// let text = "bugun tabiat juda chiroyli va Navruz bayrami bulyabdi";
// let misol = 0;

// for (let i = 0; i < text.length; i++) {
//     if (text[i] === ' ') {
//         misol++;
//     }
// }

// console.log(misol);


//6  - MASALA

// let text = "Assalomu alaykum!";
// let teskariStr = '';

// for (let i = text.length - 1; i >= 0; i--) {
//     teskariStr += text[i];
// }

// console.log(teskariStr);


//7 - MASALA

// let input = "abc123def";
// let letters = "";
// let numbers = "";

// for (let i = 0; i < input.length; i++) {
//     let char = input[i];
//     if (char >= 'a' && char <= 'z') {
//         letters += char;
//     } else if (char >= '0' && char <= '9') {
//         numbers += char;
//     }
// }

// console.log("Letters: " + letters + ", Numbers: " + numbers);

//8 - MASALA

// let input = "Salom men Asilbekman";
// let natija = "";
// let soz = "";
// let counter = 1;

// for (let i = 0; i < input.length; i++) {
//     if (input[i] !== ' ') {
//         soz += input[i];
//     } else {
//         natija += counter + ". " + soz + " ";
//         counter++;
//         soz = "";
//     }
// }

// if (soz !== "") {
//     natija += counter + ". " + soz;
// }

// console.log(natija);

//9 - MASALA

// let input = "abc";
// let output = "";

// for (let i = 0; i < input.length; i++) {
//     if (input[i] === 'a') {
//         output += 'b';
//     } else {
//         output += input[i];
//     }
// }

// console.log(output);

//10 - MASALA


// let input = "salom mening ismim Asilbek";
// let uzunSoz = "";
// let qisqaSoz = "";

// for (let i = 0; i <= input.length; i++) {

//     if (i === input.length || input[i] === ' ') {
//         if (qisqaSoz.length > uzunSoz.length) {
//             uzunSoz = qisqaSoz;
//         }
//         qisqaSoz = "";
//     } else {
//         qisqaSoz += input[i];
//     }
// }

// console.log(uzunSoz);

//11 - MASALA

// let input = "madam";
// let palindrome = true;

// for (let i = 0; i < Math.floor(input.length / 2); i++) {
//     if (input[i] !== input[input.length - 1 - i]) {
//         palindrome = false;
//         break;
//     }
// }

// console.log(palindrome);

//12 -MASALA

// let suzlar = "FKSJHFJ290890183RHWEI98234928EDJSED3R928E";
// let result = 0;

// for (let i = 0; i < suzlar.length; i++) {
//     let char = suzlar[i];
//     if (char >= '0' && char <= '9') {
//         result += parseInt(char);
//     }
// }

// console.log(result);

//1 -masala

// let fruits=["olma", "nok", "shaftoli", "uzum"]
// fruits.push("anor", "behi")
// console.log(fruits);

//2-MASALA


// let vegetable=["sabzi", "sholgom", "piyoz", "karam"]
// vegetable.pop("chisnok", "kartoshka")
// console.log(vegetable);

//3-MASALA

// let freinds=["Doston", "Bobur", "Temur", "Maqsad"]
// freinds.unshift("Jonibek", "Otabek")
// console.log(freinds);

//4-MASALA

// let array = [10, 20, 30, 40];
// let firstElement = array[0];
// console.log(firstElement);

//5-MASALA

// let array = [10, 20, 30, 40];
// let firstElement = array[3];
// console.log(firstElement);

//6-MASALA

// let str = "Salom";
// let oxirgisi = str.slice(-1);
// console.log(oxirgisi);


