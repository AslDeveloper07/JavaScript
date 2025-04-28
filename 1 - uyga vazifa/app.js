/*
//1 - MASALA

const products = [
    { name: "Olma", price: 5000, qancha: 10 },
    { name: "Banan", price: 8000, qancha: 5 },
    { name: "Uzum", price: 12000, qancha: 8 }
  ];


  products.forEach(product => {
    const umumiyQiymat = product.price * product.qancha;
    console.log(`${product.name} umumiy qiymati: ${umumiyQiymat} so'm`);
  });


  let jamiQiymat = 0;
  products.forEach(product => {
    jamiQiymat += product.price * product.qancha;
  });
  console.log(`Do'kondagi barcha mahsulotlarning umumiy qiymati: ${jamiQiymat} so'm`);

2 - MASALA

const students = [
    { name: "Asilbek", ball: [4, 5, 5, 3] },
    { name: "Bexruz", ball: [5, 5, 4, 5] },
    { name: "Azizbek", ball: [3, 4, 4, 4] }
  ];


  students.forEach(student => {
    const ortaBall = student.ball.reduce((sum, grade) => sum + grade, 0) / student.ball.length;
    console.log(`${student.name} o'rtacha bahosi: ${ortaBall.toFixed(2)}`);
  });

  let topStudent = students[0];
  let highestAvg = students[0].ball.reduce((sum, grade) => sum + grade, 0) / students[0].ball.length;

  students.forEach(student => {
    const orta = student.ball.reduce((sum, grade) => sum + grade, 0) / student.ball.length;
    if (orta > highestAvg) {
      highestAvg = orta;
      topStudent = student;
    }
  });
  console.log(`Eng yuqori o'rtacha bahoga ega talaba: ${topStudent.name} (${highestAvg.toFixed(2)})`);

//3 - MASALA

const products2 = [
    { name: "Non", price: 3000 },
    { name: "Sut", price: 6000 },
    { name: "Pishloq", price: 2700000 },
    { name: "Yog'", price: 3200000 }
  ];

  products2.forEach(product => {
    const chegirma = product.price * 0.9;
    console.log(`${product.name} chegirma bilan narxi: ${chegirma} so'm`);
  });

  const chegirma = products2.filter(product => product.price * 0.9 > 2500000);
  console.log("Chegirma narxi 2,500,000 so'mdan yuqori bo'lgan mahsulotlar:");
  chegirma.forEach(product => console.log(product.name));



//4 - MASALA
const card = {
  cardProducts: [
    {
      id:1,
      productName: "olma",
      productPrice: 15000,
      qualtity: 9
    },
    {
      id:2,
      productName: "olcha",
      productPrice: 10200,
      qualtity: 5
    },
    {
      id:3,
      productName: "sabzi",
      productPrice: 55000,
      qualtity: 2
    },
    {
      id:4,
      productName: "kitob",
      productPrice: 111000,
      qualtity: 3
    },
    {
      id:5,
      productName: "ruchka",
      productPrice: 123000,
      qualtity: 1
    },
    {
      id:6,
      productName: "kurtka",
      productPrice: 15000,
      qualtity: 1
    },
    {
      id:7,
      productName: "oyoq kiyim",
      productPrice: 17000,
      qualtity: 2
    },
    {
      id:8,
      productName: "soat",
      productPrice: 15600,
      qualtity: 1
    }
  ],
  totalAmount: 0,
  totalProduct: 0,
  calcTotalAmount() {
    for (const item of this.cardProducts) {
      this.totalAmount += item.productPrice*item.qualtity;
    }
    return `Sizning savatchangizda mahsulotlarning umumiy narxi ${this.totalAmount}`;
  },
  calcTotalProduct() {
    for (const item of this.cardProducts) {
      this.totalProduct += item.qualtity;
    }
    return `Sizning savatchangizda mahsulotlarning soni ${this.totalProduct}`;
  },
  increaseQuantity( id){

    let found=this.cardProducts.find(element=>{
      return id===element.id
    })
    return found.qualtity++
  }
};

card.increaseQuantity(6)

console.log(card.calcTotalProduct());

console.log(card.calcTotalAmount());



//5 - MASALA


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



//6 - MASALA

function sumOfNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

//7 - MASALA
function sumOddNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}

//8 - MASALA
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

//9 - MASALA
function maxInArray(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

//10 - MASALA

function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

//11 - MASALA

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let a = 0, b = 1, c;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

//12 - MASALA

function isPalindrome(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}

//13 - MASALA

function sumEvenNumbers(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}

//14 - MASALA

function sumEvenNumbers(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}
//15 - MASALA

function filterOddNumbers(arr) {
  let result = [];
  for (let num of arr) {
    if (num % 2 !== 0) {
      result.push(num);
    }
  }
  return result;
}

//16 - MASALA

function averageArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum / arr.length;
}

//17 - MASALA
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

//18 - MASALA
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

//19 - MASALA
function minInArray(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

//20 - MASALA

function reverseDigits(n) {
  let reversed = 0;
  while (n > 0) {
    reversed = reversed * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return reversed;
}

*/


//21 - MASALA

function isPalindrome(str) {
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello'));   // false

//22 - MASALA

function fibonacciSum(n) {
  let a = 0, b = 1, sum = 0;
  for (let i = 0; i < n; i++) {
    sum += a;
    let temp = a;
    a = b;
    b = temp + b;
  }
  return sum;
}
console.log(fibonacciSum(5)); // 7

//23 - MASALA

function factorial(n) {
  if (n === 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));

//24 - MASALA

function sumDigits(n) {
  return n.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}
console.log(sumDigits(123));

//25 - MASALA

function sumDigits(n) {
  return n.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}
console.log(sumDigits(123));

//26 - MASALA

function printPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let stars = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);
    console.log(stars);
  }
}
printPyramid(5);

//27 - MASALA

let a = 5, b = 10;
[a, b] = [b, a];
console.log(a, b);

//28 - MASALA

function reverseNumber(n) {
  return parseInt(n.toString().split('').reverse().join(''));
}
console.log(reverseNumber(12345));

//29 - MASALA
function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, str.length - 1));
}
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello'));   // false

//30 - MASALA

function formatDate(date) {
  let d = new Date(date);
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}
console.log(formatDate('2025-04-28')); // 28/4/2025

//31 - MASALA

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function getPrimes(limit) {
  let primes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
}
console.log(getPrimes(30)); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

//32 - MASALA
//33 - MASALA
//34 - MASALA
//35 - MASALA
//36 - MASALA
//37 - MASALA



