/*Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
d. Print the total population of countries using reduce function*/

const XHR = new XMLHttpRequest();

XHR.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(XHR.responseText);

    const totalPopulation = data.reduce((total, country) => {
      return total + country.population;
    }, 0);

    console.log('Total Population of Countries:', totalPopulation);
  }
};

XHR.open('GET', 'https://restcountries.com/v3.1/all');
XHR.send();

