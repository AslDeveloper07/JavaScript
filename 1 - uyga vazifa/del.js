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


// MASALA

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
