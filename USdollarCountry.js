/*Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
e. Print the country that uses US dollars as currency.*/

const XHR = new XMLHttpRequest();

XHR.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(XHR.responseText);

    const countriesUsingUSD = data.filter((country) => {
      if (country.currencies && country.currencies.USD !== undefined) {
         return country.currencies;
      }
    });

    if (countriesUsingUSD.length > 0) {
      console.log('Countries Using US Dollars:');
      countriesUsingUSD.forEach((country) => {
        console.log(country.name.common);
      });
    } else {
      console.log('No country uses US Dollars as currency.');
    }
  }
};

XHR.open('GET', 'https://restcountries.com/v3.1/all');
XHR.send();




