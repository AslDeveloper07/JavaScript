//1 - MASALA

// const products = [
//     { name: "Olma", price: 5000, qancha: 10 },
//     { name: "Banan", price: 8000, qancha: 5 },
//     { name: "Uzum", price: 12000, qancha: 8 }
//   ];


//   products.forEach(product => {
//     const umumiyQiymat = product.price * product.qancha;
//     console.log(`${product.name} umumiy qiymati: ${umumiyQiymat} so'm`);
//   });


//   let jamiQiymat = 0;
//   products.forEach(product => {
//     jamiQiymat += product.price * product.qancha;
//   });
//   console.log(`Do'kondagi barcha mahsulotlarning umumiy qiymati: ${jamiQiymat} so'm`);

//2 - MASALA

// const students = [
//     { name: "Asilbek", ball: [4, 5, 5, 3] },
//     { name: "Bexruz", ball: [5, 5, 4, 5] },
//     { name: "Azizbek", ball: [3, 4, 4, 4] }
//   ];


//   students.forEach(student => {
//     const ortaBall = student.ball.reduce((sum, grade) => sum + grade, 0) / student.ball.length;
//     console.log(`${student.name} o'rtacha bahosi: ${ortaBall.toFixed(2)}`);
//   });

//   let topStudent = students[0];
//   let highestAvg = students[0].ball.reduce((sum, grade) => sum + grade, 0) / students[0].ball.length;

//   students.forEach(student => {
//     const orta = student.ball.reduce((sum, grade) => sum + grade, 0) / student.ball.length;
//     if (orta > highestAvg) {
//       highestAvg = orta;
//       topStudent = student;
//     }
//   });
//   console.log(`Eng yuqori o'rtacha bahoga ega talaba: ${topStudent.name} (${highestAvg.toFixed(2)})`);

// //3 - MASALA

// const products2 = [
//     { name: "Non", price: 3000 },
//     { name: "Sut", price: 6000 },
//     { name: "Pishloq", price: 2700000 },
//     { name: "Yog'", price: 3200000 }
//   ];

//   products2.forEach(product => {
//     const chegirma = product.price * 0.9;
//     console.log(`${product.name} chegirma bilan narxi: ${chegirma} so'm`);
//   });

//   const chegirma = products2.filter(product => product.price * 0.9 > 2500000);
//   console.log("Chegirma narxi 2,500,000 so'mdan yuqori bo'lgan mahsulotlar:");
//   chegirma.forEach(product => console.log(product.name));

// //4 - MASALA

