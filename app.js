'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let randomCustomersAvg = [];
// let cookies = [];
let total = 0;
let container = document.getElementById('container');
let tableEl = document.createElement('table');
container.appendChild(tableEl);
let cities = [];
let rowCount = tableEl.rows.length;


function City(cityName, minCust, maxCust, avgCookieSale) {
    this.cityName = cityName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSale = avgCookieSale;
    this.randomCustomersAvg = randomCustomersAvg;
    this.cookies = [];
    this.total = total;
    cities.push(this);
}

City.prototype.randomAvgCust = function () {
    let min;
    let max;
    for (let i = 0; i < hours.length; i++) {
        min = Math.ceil(this.minCust);
        max = Math.floor(this.maxCust);
        let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
        this.randomCustomersAvg.push(randomNum);
    }
};




City.prototype.avgCookies = function () {
    for (let i = 0; i < hours.length; i++) {
        this.cookies[i] = Math.ceil(randomCustomersAvg[i] * this.avgCookieSale);
        this.total += this.cookies[i];
    }
    this.cookies[14] = this.total;
};




City.prototype.render = function () {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.cityName;

    for (let i = 0; i <= hours.length; i++) {
        let tdEl2 = document.createElement('td');
        trEl.appendChild(tdEl2);
        tdEl2.textContent = this.cookies[i];
    }

};

function createHeader() {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let thEl1 = document.createElement('th');
    trEl.appendChild(thEl1);
    thEl1.textContent = '';
    for (let i = 0; i < hours.length; i++) {
        let thEl2 = document.createElement('th');
        trEl.appendChild(thEl2);
        thEl2.textContent = hours[i];


    }

    let thEl16 = document.createElement('th');
    trEl.appendChild(thEl16);
    thEl16.textContent = 'Daily Location Total';
}

createHeader();

function createFooter() {

    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let tdEl = document.createElement('th');
    trEl.appendChild(tdEl);
    tdEl.textContent = 'Totals';
    let totalOftotal = 0;
    for (let i = 0; i < hours.length; i++) {
        let totalHourly = 0;
        for (let j = 0; j < cities.length; j++) {
            totalHourly += cities[j].cookies[i];
            totalOftotal += cities[j].cookies[i];


        }
        let tdEl2 = document.createElement('th');
        trEl.appendChild(tdEl2);
        tdEl2.textContent = totalHourly;
    }
    let tdEl2 = document.createElement('th');
    trEl.appendChild(tdEl2);
    tdEl2.textContent = totalOftotal;

}

let seattle = new City('seattle', 23, 65, 6.3);
let tokyo = new City('tokyo', 3, 24, 61.2);
let dubai = new City('dubai', 11, 38, 3.7);
let paris = new City('paris', 20, 38, 2.3);
let lami = new City('lami', 2, 16, 4.6);



seattle.randomAvgCust();
seattle.avgCookies();
seattle.render();

tokyo.randomAvgCust();
tokyo.avgCookies();
tokyo.render();

dubai.randomAvgCust();
dubai.avgCookies();
dubai.render();

paris.randomAvgCust();
paris.avgCookies();
paris.render();

lami.randomAvgCust();
lami.avgCookies();
lami.render();

createFooter();
let info = document.getElementById('info');
info.addEventListener('submit', addBranch);
function addBranch(event){
    event.preventDefault();
    // let pEl = document.createElement('p');
    let cityName = event.target.cityName.value;
    let minCust = event.target.minCust.value;
    let maxCust = event.target.maxCust.value;
    let avgCookieSale = event.target.avgCookieSale.value;
    let newBranch = new City(cityName, minCust, maxCust, avgCookieSale);
    newBranch.randomAvgCust();
    newBranch.avgCookies();
    tableEl.deleteRow(rowCount -1);
    newBranch.render();
    createFooter();
    
}



