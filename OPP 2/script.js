const API = fetch("https://restcountries.com/v3.1/name/uzbekistan ").then(
  (response) => {
    console.log(response.json());
    return response.json();
});
.then((API)=>{
  console.log(API);
})
// console.log(API);
