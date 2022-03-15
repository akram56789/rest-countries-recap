const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
const displayCountries = countries => {
    console.log(countries[0]);
    const countriesHTML = countries.map(country => getCountryHTML(country))
    // console.log(countriesHTML[0])
    const container = document.getElementById('countries')
    container.innerHTML = countriesHTML.join(' ');


}

// option 2
const getCountryHTML = ({ name, flags, region, population, timezones }) => {
    return `
      <div class="country">
       <h2>${name.common}</h2>
       <p>rigion:${region}</p>
       <p>independent:${population}</p>
       <p>time:${timezones[0]}</p>
       
     
       <img src = "${flags.png}">

      </div>
    `
}




//   original 
// const getCountryHTML = country => {
//     // ekhane distructur kore hoice 
//     const { name, flags } = country;
//     return `
//       <div class="country">
//        <h2>${country.name.common}</h2>
//        <img src = "${country.flags.png}">

//       </div>
//     `
// }

// option 1
// const getCountryHTML = country => {
//     // ekhane distructur kore hoice 
//     const { name, flags } = country;
//     return `
//       <div class="country">
//        <h2>${name.common}</h2>
//        <img src = "${flags.png}">

//       </div>
//     `
// }

loadCountries()