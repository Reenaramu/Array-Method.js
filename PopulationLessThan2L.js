//Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
//b. Get all the countries with a population of less than 2 lakhs using Filter function

const XHR = new XMLHttpRequest();

XHR.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(XHR.responseText);

    const countriesWithLowPopulation = data.filter((country) => {
      return country.population < 200000;
    });

    const countryNamesWithLowPopulation = countriesWithLowPopulation.map((country) => {
      return country.name.common;
    });

    console.log('Countries with Population Less Than 2 Lakhs:', countryNamesWithLowPopulation);
  }
};

XHR.open('GET', 'https://restcountries.com/v3.1/all');
XHR.send();

