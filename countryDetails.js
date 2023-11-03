/*Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
  c. Print the following details name, capital, flag, using forEach function*/

const XHR = new XMLHttpRequest();

XHR.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(XHR.responseText);

    data.forEach((country) => {
      console.log('Name:', country.name.common);
      if (country.capital && country.capital[0]) {
        console.log('Capital:', country.capital[0]);
      } else {
        console.log('Capital: N/A');
      }
      if (country.flag) {
        console.log('Flag:', country.flag);
      } else {
        console.log('Flag: N/A');
      }
      console.log('-------------------------------------------------------'); // Separation between countries
    });
  }
};

XHR.open('GET', 'https://restcountries.com/v3.1/all');
XHR.send();

