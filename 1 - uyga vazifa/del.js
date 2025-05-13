// //1 - MASALA

const card = {
  cardProducts: [
    {
      id: 1,
      productName: "olma",
      productPrice: 15000,
      qualtity: 9
    },
    {
      id: 2,
      productName: "olcha",
      productPrice: 10200,
      qualtity: 5
    },
    {
      id: 3,
      productName: "sabzi",
      productPrice: 55000,
      qualtity: 2
    },
    {
      id: 4,
      productName: "kitob",
      productPrice: 111000,
      qualtity: 3
    },
    {
      id: 5,
      productName: "ruchka",
      productPrice: 123000,
      qualtity: 1
    },
    {
      id: 6,
      productName: "kurtka",
      productPrice: 15000,
      qualtity: 1
    },
    {
      id: 7,
      productName: "oyoq kiyim",
      productPrice: 17000,
      qualtity: 2
    },
    {
      id: 8,
      productName: "soat",
      productPrice: 15600,
      qualtity: 1
    }
  ],
  totalAmount: 0,
  totalProduct: 0,
  calcTotalAmount() {
    this.totalAmount = 0;
    for (const item of this.cardProducts) {
      this.totalAmount += item.productPrice * item.qualtity;
    }
    return `Sizning savatchangizda mahsulotlarning umumiy narxi ${this.totalAmount}`;
  },
  calcTotalProduct() {
    this.totalProduct = 0;
    for (const item of this.cardProducts) {
      this.totalProduct += item.qualtity;
    }
    return `Sizning savatchangizda mahsulotlarning soni ${this.totalProduct}`;
  },
  increaseQuantity(id) {
    let found = this.cardProducts.find(element => id === element.id);
    if (found) {
      found.qualtity++;
    }
    return found ? found.qualtity : "Mahsulot topilmadi";
  },
  deleteQuantity() {
    for (const item of this.cardProducts) {
      item.qualtity = 0;
    }
    this.totalAmount = 0;
    this.totalProduct = 0;
    return "Barcha mahsulotlarning soni 0 ga tenglandi.";
  },
  clearQuantityId(id) {
    let found = this.cardProducts.find(item => item.id === id);
    if (found) {
      found.qualtity = 0;
      return `ID-si ${id} bo'lgan mahsulotning soni 0 ga tenglandi.`;
    } else {
      return "Bunday ID-ga ega mahsulot topilmadi.";
    }
  }
};


console.log(card.calcTotalProduct());

console.log(card.clearQuantityId(4));

console.log(card.calcTotalProduct());

console.log(card.calcTotalAmount());


// //2-MASALA

function runLengthEncode(str) {
    if (str.length === 0) return "";

    let result = "";
    let count = 1;

    for (let i = 1; i <= str.length; i++) {
      if (str[i] === str[i - 1]) {
        count++;
      } else {
        result += str[i - 1] + count;
        count = 1;
      }
    }

    return result;
  }


//3-MASALA

function mostFrequentChar(str) {
    const freq = {};
    for (let char of str) {
      freq[char] = (freq[char] || 0) + 1;
    }

    let max = 0;
    let result = '';

    for (let char in freq) {
      if (freq[char] > max) {
        max = freq[char];
        result = char;
      }
    }

    return result;
  }


// //3-MASALA

function digitalRoot(n) {
    while (n >= 10) {
      n = n.toString().split('').reduce((sum, d) => sum + Number(d), 0);
    }
    return n;
  }

4 - masala
function exampleFunction() {
  const x = "declared inside function"; // x can only be used in exampleFunction
  console.log("Inside function");
  console.log(x);
}

//5 - masala

const x = "declared outside function";

exampleFunction();

function exampleFunction() {
  console.log("Inside function");
  console.log(x);
}

console.log("Outside function");
console.log(x);

// 6 masala
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return str === str.split('').reverse().join('');
}
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true


function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]



function mostFrequent(arr) {
  let counts = {};
  let maxCount = 0, result = null;

  for (let item of arr) {
    counts[item] = (counts[item] || 0) + 1;
    if (counts[item] > maxCount) {
      maxCount = counts[item];
      result = item;
    }
  }
  return result;
}
console.log(mostFrequent([1, 3, 1, 3, 2, 1])); // 1



function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}
console.log(reverseWords("JavaScript is awesome")); // "awesome is JavaScript"



function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); // 8


function charCount(str) {
  const result = {};
  for (let char of str.toLowerCase()) {
    if (/[a-z0-9]/.test(char)) {
      result[char] = (result[char] || 0) + 1;
    }
  }
  return result;
}
console.log(charCount("Hello World!"));
// { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }



function capitalizeWords(str) {
  return str.split(' ').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ');
}
console.log(capitalizeWords("hello world from js"));
// "Hello World From Js"



function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(29)); // true



function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4])); // 10




function longestWord(str) {
  const words = str.split(' ');
  let max = "";

  for (let word of words) {
    if (word.length > max.length) {
      max = word;
    }
  }
  return max;
}
console.log(longestWord("JavaScript is powerful language"));
// "JavaScript"


function isAnagram(str1, str2) {
  const format = str => str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
  return format(str1) === format(str2);
}
console.log(isAnagram("listen", "silent")); // true


function flatten(arr) {
  return arr.flat(Infinity);
}
console.log(flatten([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]



function digitSum(n) {
  return n.toString().split('').reduce((sum, d) => sum + parseInt(d), 0);
}
console.log(digitSum(12345)); // 15


function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("javascript")); // "tpircsavaj"



function shiftLetters(str) {
  return str.split('').map(char => {
    if (/[a-z]/i.test(char)) {
      let code = char.charCodeAt(0) + 1;
      if ((char <= 'z' && code > 122) || (char <= 'Z' && code > 90)) {
        code -= 26;
      }
      return String.fromCharCode(code);
    }
    return char;
  }).join('');
}
console.log(shiftLetters("abc xyz")); // "bcd yza"



function countEvenOdd(arr) {
  let even = 0, odd = 0;
  for (let num of arr) {
    num % 2 === 0 ? even++ : odd++;
  }
  return { even, odd };
}
console.log(countEvenOdd([1, 2, 3, 4, 5, 6])); // { even: 3, odd: 3 }


function extractDigits(str) {
  return str.replace(/\D/g, '');
}
console.log(extractDigits("abc123xyz")); // "123"
