'use strict';
let seattle = {
    minCust: 23, maxCust: 65, avgCookieSale: 6.3 ,
    randomAvgCust: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};

let num = 0;
let randomCustomersAvg = [];
for(let i = 0 ; i < 15 ; i++){
    num = seattle.randomAvgCust(seattle.minCust,seattle.maxCust);
    randomCustomersAvg[i] = num;

}
console.log(randomCustomersAvg);

let sales = [];
for(let i = 0; i < randomCustomersAvg.length; i++){
    sales[i]= randomCustomersAvg[i] * seattle.avgCookieSale; 
}
console.log(sales);

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let salesAndHours = [];
for(let i = 0; i < hours.length; i++){
    salesAndHours[i]= hours[i]+ " : "+sales[i] + " cookies IN Seattle";
}
console.log(salesAndHours);

let container = document.getElementById('container');
let ulEL = document.createElement('ul');
let liEl;
for(let i = 0; i < salesAndHours.length; i++){
    liEl = document.createElement('li');
    liEl.textContent = salesAndHours[i];
    ulEL.appendChild(liEl);
}
container.appendChild(ulEL);


let tokyo = {
    minCust: 3, maxCust: 24, avgCust: 0 ,avgCookieSale: 1.2,
    randomAvgCust: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};
let num1 = 0;
let randomCustomersAvg1 = [];
for(let i = 0 ; i < 15 ; i++){
    num1 = tokyo.randomAvgCust(tokyo.minCust,tokyo.maxCust);
    randomCustomersAvg1[i] = num1;

}
console.log(randomCustomersAvg1);

let sales1 = [];
for(let i = 0; i < randomCustomersAvg1.length; i++){
    sales1[i]= randomCustomersAvg1[i] * tokyo.avgCookieSale; 
}
console.log(sales1);

let hours1 = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let salesAndHours1 = [];
for(let i = 0; i < hours1.length; i++){
    salesAndHours1[i]= hours1[i]+ " : "+sales1[i] + " cookies IN Tokyo";
}
console.log(salesAndHours1);
let container1 = document.getElementById('container1');
let ulEL1 = document.createElement('ul');
let liEl1;
for(let i = 0; i < salesAndHours1.length; i++){
    liEl1 = document.createElement('li');
    liEl1.textContent = salesAndHours1[i];
    ulEL1.appendChild(liEl1);
}
container1.appendChild(ulEL1);

let dubai = {
    minCust: 11, maxCust: 38, avgCust: 0 , avgCookieSale: 3.7,
    randomAvgCust: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};

let num2 = 0;
let randomCustomersAvg2 = [];
for(let i = 0 ; i < 15 ; i++){
    num2 = dubai.randomAvgCust(dubai.minCust,dubai.maxCust);
    randomCustomersAvg2[i] = num2;

}
console.log(randomCustomersAvg2);

let sales2 = [];
for(let i = 0; i < randomCustomersAvg2.length; i++){
    sales2[i]= randomCustomersAvg2[i] * dubai.avgCookieSale; 
}
console.log(sales2);

let hours2 = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let salesAndHours2 = [];
for(let i = 0; i < hours2.length; i++){
    salesAndHours2[i]= hours2[i]+ " : "+sales2[i] + " cookies IN dubai";
}
console.log(salesAndHours2);

let container2 = document.getElementById('container');
let ulEL2 = document.createElement('ul');
let liEl2;
for(let i = 0; i < salesAndHours2.length; i++){
    liEl2 = document.createElement('li');
    liEl2.textContent = salesAndHours2[i];
    ulEL2.appendChild(liEl2);
}
container2.appendChild(ulEL2);




let paris = {
    minCust: 20, maxCust: 38, avgCust: 0 , avgCookieSale: 2.3,
    randomAvgCust: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};


let num3 = 0;
let randomCustomersAvg3 = [];
for(let i = 0 ; i < 15 ; i++){
    num3 = paris.randomAvgCust(paris.minCust,paris.maxCust);
    randomCustomersAvg3[i] = num3;

}
console.log(randomCustomersAvg3);

let sales3 = [];
for(let i = 0; i < randomCustomersAvg3.length; i++){
    sales3[i]= randomCustomersAvg3[i] * paris.avgCookieSale; 
}
console.log(sales3);

let hours3 = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let salesAndHours3 = [];
for(let i = 0; i < hours3.length; i++){
    salesAndHours3[i]= hours3[i]+ " : "+sales3[i] + " cookies IN Paris";
}
console.log(salesAndHours3);

let container3 = document.getElementById('container');
let ulEL3 = document.createElement('ul');
let liEl3;
for(let i = 0; i < salesAndHours3.length; i++){
    liEl3 = document.createElement('li');
    liEl3.textContent = salesAndHours3[i];
    ulEL3.appendChild(liEl3);
}
container3.appendChild(ulEL3);


let lima = {
    minCust: 2, maxCust: 16, avgCust: 0 ,avgCookieSale: 4.6,
    randomAvgCust: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};

let num4 = 0;
let randomCustomersAvg4 = [];
for(let i = 0 ; i < 15 ; i++){
    num4 = lima.randomAvgCust(lima.minCust,lima.maxCust);
    randomCustomersAvg4[i] = num4;

}
console.log(randomCustomersAvg4);

let sales4 = [];
for(let i = 0; i < randomCustomersAvg4.length; i++){
    sales4[i]= randomCustomersAvg4[i] * lima.avgCookieSale; 
}
console.log(sales4);

let hours4 = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let salesAndHours4 = [];
for(let i = 0; i < hours4.length; i++){
    salesAndHours4[i]= hours4[i]+ " : "+sales4[i] + " cookies IN Lima";
}
console.log(salesAndHours4);


let container4 = document.getElementById('container');
let ulEL4 = document.createElement('ul');
let liEl4;
for(let i = 0; i < salesAndHours4.length; i++){
    liEl4 = document.createElement('li');
    liEl4.textContent = salesAndHours4[i];
    ulEL4.appendChild(liEl4);
}
container4.appendChild(ulEL4);


