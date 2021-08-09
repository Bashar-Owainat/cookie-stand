'use strict';

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let randomCustomersAvg = [];
let cookies = [];
let total =0;
let container = document.getElementById('container');
let tableEl = document.createElement('table');
container.appendChild(tableEl);
let totals = [];

function City(cityName, minCust, maxCust,avgCookieSale ){
    this.cityName = cityName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSale = avgCookieSale;
    this.randomCustomersAvg = randomCustomersAvg;
    this.cookies = cookies;
    this.total = total;
    this.totals = totals;
}

City.prototype.randomAvgCust = function () {
    let min;
    let max;
    for(let i = 0; i < hours.length ; i++ ){
        min = Math.ceil(this.minCust);
        max = Math.floor(this.maxCust);
        let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
        this.randomCustomersAvg.push(randomNum);
    }
};




City.prototype.avgCookies = function(){
    for(let i = 0; i < hours.length; i++){
        this.cookies[i]= Math.ceil(randomCustomersAvg[i] * this.avgCookieSale);
        this.total += this.cookies[i];
    }
    this.cookies[14] = this.total;
};





City.prototype.render = function(){
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.cityName;

    for(let i = 0; i <= hours.length; i++){
        let tdEl2 = document.createElement('td');
        trEl.appendChild(tdEl2);
        tdEl2.textContent = cookies[i];
    }


};

function createHeader(){
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let thEl1 = document.createElement('th');
    trEl.appendChild(thEl1);
    thEl1.textContent = '';

    let thEl2 = document.createElement('th');
    trEl.appendChild(thEl2);
    thEl2.textContent = '6am';

    let thEl3 = document.createElement('th');
    trEl.appendChild(thEl3);
    thEl3.textContent = '7am';

    let thEl4 = document.createElement('th');
    trEl.appendChild(thEl4);
    thEl4.textContent = '8am';

    let thEl5 = document.createElement('th');
    trEl.appendChild(thEl5);
    thEl5.textContent = '9am';

    let thEl6 = document.createElement('th');
    trEl.appendChild(thEl6);
    thEl6.textContent = '10am';

    let thEl7 = document.createElement('th');
    trEl.appendChild(thEl7);
    thEl7.textContent = '11am';

    let thEl8 = document.createElement('th');
    trEl.appendChild(thEl8);
    thEl8.textContent = '12pm';

    let thEl9 = document.createElement('th');
    trEl.appendChild(thEl9);
    thEl9.textContent = '1pm';

    let thEl10 = document.createElement('th');
    trEl.appendChild(thEl10);
    thEl10.textContent = '2pm';

    let thEl11 = document.createElement('th');
    trEl.appendChild(thEl11);
    thEl11.textContent = '3pm';

    let thEl12 = document.createElement('th');
    trEl.appendChild(thEl12);
    thEl12.textContent = '4pm';

    let thEl13 = document.createElement('th');
    trEl.appendChild(thEl13);
    thEl13.textContent = '5pm';

    let thEl14 = document.createElement('th');
    trEl.appendChild(thEl14);
    thEl14.textContent = '6pm';

    let thEl15 = document.createElement('th');
    trEl.appendChild(thEl15);
    thEl15.textContent = '7pm';

    let thEl16 = document.createElement('th');
    trEl.appendChild(thEl16);
    thEl16.textContent = 'Daily Location Total';
}

createHeader();

function createFooter(){

    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let tdEl = document.createElement('th');
    trEl.appendChild(tdEl);
    tdEl.textContent = 'Totals';

}

let seattle = new City('seattle',23,65,6.3);
let tokyo = new City('tokyo',3,24,61.2);
let dubai = new City('dubai',11,38,3.7);
let paris = new City('paris',20,38,2.3);
let lami = new City('lami',2,16,4.6);



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


