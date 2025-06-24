fetch("https://restcountries.com/v3.1/name/uzbekistan")
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // bu yerda API'dan kelgan haqiqiy ma'lumotni ko'rasiz
  })
  .catch((error) => {
    console.error("Xatolik:", error);
  });
