// //1 - MASALA

// const card = {
//   cardProducts: [
//     {
//       id: 1,
//       productName: "olma",
//       productPrice: 15000,
//       qualtity: 9
//     },
//     {
//       id: 2,
//       productName: "olcha",
//       productPrice: 10200,
//       qualtity: 5
//     },
//     {
//       id: 3,
//       productName: "sabzi",
//       productPrice: 55000,
//       qualtity: 2
//     },
//     {
//       id: 4,
//       productName: "kitob",
//       productPrice: 111000,
//       qualtity: 3
//     },
//     {
//       id: 5,
//       productName: "ruchka",
//       productPrice: 123000,
//       qualtity: 1
//     },
//     {
//       id: 6,
//       productName: "kurtka",
//       productPrice: 15000,
//       qualtity: 1
//     },
//     {
//       id: 7,
//       productName: "oyoq kiyim",
//       productPrice: 17000,
//       qualtity: 2
//     },
//     {
//       id: 8,
//       productName: "soat",
//       productPrice: 15600,
//       qualtity: 1
//     }
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
//     let found = this.cardProducts.find(element => id === element.id);
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
//     let found = this.cardProducts.find(item => item.id === id);
//     if (found) {
//       found.qualtity = 0;
//       return `ID-si ${id} bo'lgan mahsulotning soni 0 ga tenglandi.`;
//     } else {
//       return "Bunday ID-ga ega mahsulot topilmadi.";
//     }
//   }
// };


// console.log(card.calcTotalProduct());

// console.log(card.clearQuantityId(4));

// console.log(card.calcTotalProduct());

// console.log(card.calcTotalAmount());


//2 - MASALA

// const users = [];

// function isValidEmail(email) {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }

// function isValidPassword(password) {
//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
//   return passwordRegex.test(password);
// }

// function addUser(id, email, password, firstName, lastName, birthYear, address) {
//   if (!isValidEmail(email)) {
//     console.log("Email noto‘g‘ri formatda.");
//     return;
//   }
//   if (!isValidPassword(password)) {
//     console.log("Parol kuchsiz. U kamida 8 ta belgi, katta va kichik harf, raqam bo‘lishi kerak.");
//     return;
//   }

//   const user = {
//     id,
//     email,
//     password,
//     firstName,
//     lastName,
//     birthYear,
//     address
//   };

//   users.push(user);
//   console.log("Foydalanuvchi muvaffaqiyatli qo‘shildi.");
// }

// function deleteUser(searchId) {
//   const index = users.findIndex(user => user.id.includes(searchId) || user.id.endsWith(searchId));
//   if (index !== -1) {
//     users.splice(index, 1);
//     console.log(`Foydalanuvchi ID "${searchId}" bo‘yicha o‘chirildi.`);
//   } else {
//     console.log("Bunday IDga ega foydalanuvchi topilmadi.");
//   }
// }

// function updateUser(id, newData) {
//   const user = users.find(user => user.id === id);
//   if (!user) {
//     console.log("Foydalanuvchi topilmadi.");
//     return;
//   }

//   Object.assign(user, newData);
//   console.log("Foydalanuvchi ma'lumotlari yangilandi.");
// }

// function listUsers() {
//   console.log("Foydalanuvchilar ro‘yxati:");
//   users.forEach(user => {
//     console.log(`ID: ${user.id}, Ism: ${user.firstName}, Familiya: ${user.lastName}, Email: ${user.email}, Tug‘ilgan yil: ${user.birthYear}, Yashash joyi: ${user.address}`);
//   });
// }


//3 - MASALA

const users = []
let user1 = {
  name: 'Asilbek',
  age: 17,
  email: 'Aslwexking777@gmail.com'
}
let user2 = {
  name: 'Asilbek',
  age: 17,
  email: 'Aslwexking777@gmail.com'
}
addUser(user1)
addUser(user2)

function addUser (user) {
  if (user) {
    users.push(user)
    let foundEmailUser = users.find(user => console.log(item))
    console.log('Foydalanuvchi muvaffaqiyatli qushildi');

  } else {
    console.log("Ma'lumot yuq ")
  }
}

const listUser = () => {
  if (users.length > 0) {
    let userList = users.forEach((user) => {
      return user
    })
    return userList
  } else {
    console.log('foydalanuvchi mavjud emas ');
  }
}
listUser()



















