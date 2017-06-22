'use strict';

// Declare global variables:

var allProducts = [];
var productNames = [];
var questionNumber = 1;
var alreadyUsed = [];
var chartData = [];
var chartColors = [];
var randomProduct;
var leftChoice;
var middleChoice;
var rightChoice;

// Object constructor for all products

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

// Create all of the products using the constructor

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


// Render the first three product choices

function renderInitialChoices () {
  for (var i = 0; i < 3; i++) {
    var random = Math.floor(Math.random() * productNames.length);
    while (alreadyUsed.indexOf(productNames[random]) > -1) {
      random = Math.floor(Math.random() * productNames.length);
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
  }
}

renderInitialChoices();

// Set up the three different event listeners for each image/text group

// Left Product:

var leftProduct = document.getElementById('figure0');
leftProduct.addEventListener('click', function(){
  addPoint(leftChoice);
  resetChoices();

  leftChoice = allProducts[randomProduct];
  alreadyUsed.splice(0, 3);

  var counter = document.getElementById('counter');
  questionNumber += 1;
  counter.textContent = 'Question ' + questionNumber + ' of 25';
  if (questionNumber > 25) {
    displayChart();
  }
});

// Middle Product:

var middleProduct = document.getElementById('figure1');
middleProduct.addEventListener('click', function(){
  addPoint(middleChoice);
  resetChoices();

  middleChoice = allProducts[randomProduct];
  alreadyUsed.splice(0, 3);

  var counter = document.getElementById('counter');
  questionNumber += 1;
  counter.textContent = 'Question ' + questionNumber + ' of 25';
  if (questionNumber > 25) {
    displayChart();
  }
});

// Right product:

var rightProduct = document.getElementById('figure2');
rightProduct.addEventListener('click', function(){
  addPoint(rightChoice);
  resetChoices();

  rightChoice = allProducts[randomProduct];
  alreadyUsed.splice(0, 3);

  var counter = document.getElementById('counter');
  questionNumber += 1;
  counter.textContent = 'Question ' + questionNumber + ' of 25';
  if (questionNumber > 25) {
    displayChart();
  }
});


////////////////////////////////////////////////////////////////
// All global functions defined below:
////////////////////////////////////////////////////////////////



function displayChart () {
  parent = document.getElementById('container');
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

  generateColors();
  retrieveChartData();

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [{
        label: 'Total Product Votes',
        data: chartData,
        backgroundColor: chartColors,
        borderColor: chartColors,
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

function retrieveChartData () {
  for (var i = 0; i < productNames.length; i++) {
    chartData.push(allProducts[i].timesChosen);
  }
}

function generateColors () {
  for (var i = 0; i < productNames.length; i++) {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    chartColors.push('rgb(' + r + ', ' + g + ' ,' + b + ')');
  }
}

function resetChoices () {
  for (var i = 0; i < 3; i++) {
    // var score = document.getElementsByClassName('figure0')
    randomProduct = Math.floor(Math.random() * productNames.length);
    while (alreadyUsed.indexOf(productNames[randomProduct]) > -1) {
      randomProduct = Math.floor(Math.random() * productNames.length);
    };
    // var figure = document.getElementById('figure0');
    var img = document.getElementById('img' + i);
    img.setAttribute('src', 'img/' + productNames[randomProduct] + '.jpg');
    var figcaption = document.getElementById('caption' + i);
    figcaption.textContent = allProducts[randomProduct].friendlyName;
    alreadyUsed.push(productNames[randomProduct]);
  }
}

function addPoint (selection) {
  selection.timesChosen += 1;
}
