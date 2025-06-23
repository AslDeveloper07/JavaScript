


 const getCountryData=function(country){

const cardContainer = document.getElementsByClassName("card-container");
const countries = document.getElementsByClassName("countries");

const request = new XMLHttpRequest()
request.open("GET", `https://restcountries.com/v3.1/name/${country}`)
request.send()

request.addEventListener("load", ()=>{
    const [info]=JSON.parse(request.responseText)
    console.log(info );
    const html =`
    <article class="country">
    <img class="country__img" src="${info.flags.png}" alt="${info.flags.alt}"/>
    <div class="country__data">
    <h2 class="country__name">${info.name.common}</h2>
    <h3 class="country-region">${info.region}</h3>
    <p class="country-row"><span>${Math.round(info.population/1000000000)}</span></p>
    <p class="country-row"><span>${info.capital[0]}</span></p>
    <p class="country-row"><span>${info.currencies.UZS.symbol}</span></p>
    </div>
    </article>
    `

    cardContainer.insertAdjacentHTML('beforeend', html)
    countries.style.opacity=1
})
 }

 getCountryData('Uzbekistan')