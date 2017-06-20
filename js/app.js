'use strict';

// Declare global variables:

var allProducts = [];
var productNames = [];
var questionNumber = 1;
var alreadyUsed = [];

var leftChoice;
var middleChoice;
var rightChoice;

// Declare global functions:

function Product (name, friendlyName) {
  this.name = name;
  this.friendlyName = friendlyName;
  this.source = 'img/' + this.name + '.jpg';
  this.timesChosen = 0;
  this.percentClicked = 0;
  this.timesChosenMessage = '';
  this.percentClickedMessage = '';
  allProducts.push(this);
  productNames.push(this.name);
  this.calculatePercent = function() {
    this.percentClicked = (this.timesChosen / 25) * 100;
  };
  this.createMessage1 = function () {
    this.timesChosenMessage = 'Chosen: ' + this.timesChosen + ' times';
  };
  this.createMessage2 = function () {
    this.percentClickedMessage = 'Percent of total: ' + this.percentClicked + '%';
  };
}


var bag = new Product('bag', 'R2D2 Bag');
var banana = new Product('banana', 'Banana Slicer');
var bathroom = new Product('bathroom', 'Bathroom Tablet Holder');
var boots = new Product('boots', 'Boot Shoe Covers');
var breakfast = new Product('breakfast', 'Complete Breakfast Maker');
var bubblegum = new Product('bubblegum', 'Meatball Bubble Gum');
var chair = new Product('chair', 'Super-Uncomfortable Chair');
var cthulhu = new Product('cthulhu', 'Cthulhu Action Figure');
var dog_duck = new Product('dog_duck', 'The Old Duck-Dog');
var dragon = new Product('dragon', 'Can of Dragon Meat');
var pen = new Product('pen', 'Utencil Caps');
var pet_sweep = new Product('pet_sweep', 'Pet Sweeping Boots');
var scissors = new Product('scissors', 'Pizza Scissors');
var shark = new Product('shark', 'Shark Sleeping Bag');
var sweep = new Product('sweep', 'Baby Sweeping Outfit');
var tauntaun = new Product('tauntaun', 'Dead Tauntaun Sleeping Bag');
var unicorn = new Product('unicorn', 'Can of Unicorn Meat');
var usb = new Product('usb', 'USB Tentacle Arm');
var water_can = new Product('water_can', 'Functional Water Can');
var wine_glass = new Product('wine_glass', 'Best Wine Glass');

console.log(allProducts);

function renderProduct () {
  for (var i = 0; i < 3; i++) {
    var random = Math.floor(Math.random() * productNames.length);
    while (alreadyUsed.indexOf(productNames[random]) > -1) {
      random = Math.floor(Math.random() * productNames.length);
      console.log('already used');
    };
    var counter = document.getElementById('counter');
    counter.textContent = 'Question ' + questionNumber + ' of 25';
    var parentElement = document.getElementById('surveyProducts');
    var figure = document.createElement('figure');
    // figure.setAttribute('id', allProducts[random].name);
    // figure.setAttribute('class', allProducts[random].name);
    figure.setAttribute('id', 'figure' + i);
    var img = document.createElement('img');
    img.setAttribute('id', 'img' + i);
    img.setAttribute('src', 'img/' + productNames[random] + '.jpg');
    var figcaption = document.createElement('figcaption');
    figcaption.setAttribute('id', 'caption' + i);
    figcaption.textContent = allProducts[random].friendlyName;

    if (i === 0) {
      leftChoice = allProducts[random];
    } else if (i === 1) {
      middleChoice = allProducts[random];
    } else {
      rightChoice = allProducts[random];
    }

    parentElement.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    alreadyUsed.push(productNames[random]);
    console.log(alreadyUsed);
  }
}

renderProduct();

function addPoint (selection) {
  selection.timesChosen += 1;
}



var optionA = document.getElementById('figure0');
optionA.addEventListener('click', function(){
  addPoint(leftChoice);
  console.log(leftChoice.name + ' points: ' + leftChoice.timesChosen);
  for (var i = 0; i < 3; i++) {
    // var score = document.getElementsByClassName('figure0')
    var random = Math.floor(Math.random() * productNames.length);
    while (alreadyUsed.indexOf(productNames[random]) > -1) {
      random = Math.floor(Math.random() * productNames.length);
      console.log('already used');
    };
    // var figure = document.getElementById('figure0');
    var img = document.getElementById('img' + i);
    img.setAttribute('src', 'img/' + productNames[random] + '.jpg');
    var figcaption = document.getElementById('caption' + i);
    figcaption.textContent = allProducts[random].friendlyName;
    alreadyUsed.push(productNames[random]);
    console.log(alreadyUsed);
  }
  leftChoice = allProducts[random];
  alreadyUsed.splice(0, 3);
  console.log(alreadyUsed);
  var counter = document.getElementById('counter');
  questionNumber += 1;
  counter.textContent = 'Question ' + questionNumber + ' of 25';
  if (questionNumber > 25) {
    displayChart();
  }
  console.log(questionNumber);
});

var optionB = document.getElementById('figure1');
optionB.addEventListener('click', function(){
  addPoint(middleChoice);
  console.log(middleChoice.name + ' points: ' + middleChoice.timesChosen);
  for (var i = 0; i < 3; i++) {
    // var score = document.getElementsByClassName('figure0')
    var random = Math.floor(Math.random() * productNames.length);
    while (alreadyUsed.indexOf(productNames[random]) > -1) {
      random = Math.floor(Math.random() * productNames.length);
      console.log('already used');
    };
    // var figure = document.getElementById('figure0');
    var img = document.getElementById('img' + i);
    img.setAttribute('src', 'img/' + productNames[random] + '.jpg');
    var figcaption = document.getElementById('caption' + i);
    figcaption.textContent = allProducts[random].friendlyName;
    alreadyUsed.push(productNames[random]);
    console.log(alreadyUsed);
  }
  middleChoice = allProducts[random];
  alreadyUsed.splice(0, 3);
  console.log(alreadyUsed);
  var counter = document.getElementById('counter');
  questionNumber += 1;
  counter.textContent = 'Question ' + questionNumber + ' of 25';
  if (questionNumber > 25) {
    displayChart();
  }
  console.log(questionNumber);
});

var optionC = document.getElementById('figure2');
optionC.addEventListener('click', function(){
  addPoint(rightChoice);
  console.log(rightChoice.name + ' points: ' + rightChoice.timesChosen);
  for (var i = 0; i < 3; i++) {
    // var score = document.getElementsByClassName('figure0')
    var random = Math.floor(Math.random() * productNames.length);
    while (alreadyUsed.indexOf(productNames[random]) > -1) {
      random = Math.floor(Math.random() * productNames.length);
      console.log('already used');
    };
    // var figure = document.getElementById('figure0');
    var img = document.getElementById('img' + i);
    img.setAttribute('src', 'img/' + productNames[random] + '.jpg');
    var figcaption = document.getElementById('caption' + i);
    figcaption.textContent = allProducts[random].friendlyName;
    alreadyUsed.push(productNames[random]);
    console.log(alreadyUsed);
  }
  rightChoice = allProducts[random];
  alreadyUsed.splice(0, 3);
  console.log(alreadyUsed);
  var counter = document.getElementById('counter');
  questionNumber += 1;
  counter.textContent = 'Question ' + questionNumber + ' of 25';
  if (questionNumber > 25) {
    displayChart();
  }
  console.log(questionNumber);
});


// Replace everything on the screen with the results page

function displayResults () {
  parent = document.getElementById('mainPage');
  var child = document.getElementById('surveyProducts');
  parent.removeChild(child);
  child = document.createElement('main');
  child.setAttribute('id', 'surveyResults');
  parent.appendChild(child);
  var message = document.getElementById('counter');
  message.textContent = 'The result of your survey are as shown below:';

  for (var i = 0; i < productNames.length; i++) {
    allProducts[i].calculatePercent();
    allProducts[i].createMessage1();
    allProducts[i].createMessage2();

    var result = document.createElement('div');
    child.appendChild(result);

    var image = document.createElement('img');
    image.setAttribute('src', allProducts[i].source);
    result.appendChild(image);


    var data1 = document.createElement('p');
    data1.textContent = allProducts[i].timesChosenMessage;
    result.appendChild(data1);

    var data2 = document.createElement('p');
    data2.textContent = allProducts[i].percentClickedMessage;
    result.appendChild(data2);
  }
}

function displayChart () {
  parent = document.getElementById('mainPage');
  var child = document.getElementById('surveyProducts');
  parent.removeChild(child);
  child = document.createElement('main');
  child.setAttribute('id', 'surveyChart');
  parent.appendChild(child);
  var message = document.getElementById('counter');
  message.textContent = 'The result of your survey are as shown below:';
  var canvas = document.createElement('canvas');
  canvas.setAttribute('id', 'myChart');
  canvas.setAttribute('width', '400');
  canvas.setAttribute('height', '400');
  child.appendChild(canvas);

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}
