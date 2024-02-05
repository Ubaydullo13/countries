import { modeSelect } from "./functions.js";
const aboutImg = document.querySelector("#flag");
const countryName = document.querySelector("#name");
const nativeName = document.querySelector("#nativeName");
const population = document.querySelector("#population");
const region = document.querySelector("#region");
const subRegion = document.querySelector("#subRegion");
const capital = document.querySelector("#capital");
const tld = document.querySelector("#domain");
const currencies = document.querySelector("#currencies");
const languages = document.querySelector("#languages");
const borders = document.querySelector("#borders");
const closeBtn = document.getElementById("close");
const loader = document.querySelector('.center')

modeSelect();

closeBtn.addEventListener("click", function () {
    let domain = window.location.href.substring(0, window.location.href.search("pages/about"));
    window.location.assign(`${domain}index.html`);
  });


document.addEventListener("DOMContentLoaded", function () {
  let urlIndex = window.location.href.search("id=");
  if (urlIndex > 0) {
    let elId = window.location.href.substring(urlIndex + 3);

    if (elId) {
      fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries/${elId}`)
        .then((response) => response.json())
        .then((data) => {
            loader.style.display = "none";
          aboutImg.src = data.flags.png;

          countryName.innerHTML = data.name.common;
          nativeName.innerHTML = "<strong>Native Name:</strong>" + data.name.nativeName;
          population.innerHTML = "<strong>Population:</strong>" + data.population;
          region.innerHTML =  "<strong>Region:</strong>" + data.region;
          subRegion.innerHTML = "<strong>Sub Region:</strong>" + data.subregion;
          capital.innerHTML =  "<strong>Capital:</strong>" + data.capital;
          tld.innerHTML =  "<strong>Top Level Domain:</strong>" + data.cca3;
          currencies.innerHTML = "<strong>Currensies:</strong>" + data.currencies;
          languages.innerHTML = "<strong>Languages:</strong>" + data.languages;
          borders.innerHTML = "<strong>Border Countries:</strong>" + (data.borders ? data.borders.map((border) => border.common).join(', ') : 'None');

        });
    }
  }
});
