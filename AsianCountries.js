/*Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
a. Get all the countries from Asia continent /region using Filter function*/

const XHR = new XMLHttpRequest();

XHR.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(XHR.responseText);

    const asiaCountryNames = data
      .filter((country) => country.continents.indexOf("Asia") !== -1)
      .map((country) => country.name.common);

    console.log('Asian Countries:', asiaCountryNames);
  }
};

XHR.open('GET', 'https://restcountries.com/v3.1/all');
XHR.send();

