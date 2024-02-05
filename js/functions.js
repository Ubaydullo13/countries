const countriesContainer = document.getElementById("countries");
const toggleBtn = document.getElementById('toggle');
const body = document.querySelector('body');

const apiUrl = "https://frontend-mentor-apis-6efy.onrender.com/countries";
  
    
let countriesData = [];
    async function fetchCountries() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        countriesData = data.data;
        console.log(countriesData);
        displayCountries(countriesData);
      } catch (error) {
        console.error("Error fetching countries data:", error);
      }
    }

    function modeSelect(){
      // Event listener for toggle button
      const modeFromLocal = localStorage.getItem('mode') ? localStorage.getItem('mode') : null;
      if (modeFromLocal === 'dark') {
        body.classList.add('dark');
      }
      // toggle theme - dark & light
      toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
      modeFromLocal ? localStorage.setItem('mode', '') : localStorage.setItem('mode', 'dark');
      });
    }


function displayCountries(countries) {
    countriesContainer.innerHTML = "";
    countries.forEach((country) => {
      const countryCard = createCountryCard(country);
      countriesContainer.appendChild(countryCard);
    });
  }

  function createCountryCard(country) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div>
          <img src="${country.flags.png}" alt="${country.name.common}">
      </div>
      <div class="card-body">
          <h3 class="country-name">${country.name.common}</h3>
          <p>
              <strong>Population:</strong>
              ${country.population}
          </p>
          <p class="country-region">
              <strong>Region:</strong>
              ${country.region}
          </p>
          <p>
              <strong>Capital:</strong>
              ${country.capital}
          </p>
      </div>
    `;
    card.addEventListener('click', () => {
    let domain = window.location.href.substring(0, window.location.href.search("index"));
    window.location.assign(`${domain}pages/about.html?id=${country.name.slug}`);
  });

    return card;
  }

  export {fetchCountries, countriesData, displayCountries, createCountryCard, modeSelect}