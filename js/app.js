import {fetchCountries, countriesData, displayCountries, modeSelect} from "./functions.js";
document.addEventListener("DOMContentLoaded", function () {

const searchInput = document.getElementById("search");
const filterDropdown = document.getElementById("filter");
const filterBtn = document.querySelector('.dropdown-filter');
const regionList = document.querySelector('ul');


modeSelect();
  
    // Event listener for search input
    searchInput.addEventListener("input", function () {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredCountries = countriesData.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm)
      );
      displayCountries(filteredCountries);
    });
  
    // Event listener for filter dropdown
    filterBtn.addEventListener("click", function () {
      regionList.style.display = "block";
    });
  
    // Event delegation for filter options
    filterDropdown.addEventListener("click", function (event) {
      if (event.target.tagName === "LI") {
        const region = event.target.textContent;
        const filteredCountries = countriesData.filter(
          (country) => region === "All" || country.region === region
        );
        displayCountries(filteredCountries);
        regionList.style.display = "none";
      }
    });
  
    fetchCountries();
  });
  
  
