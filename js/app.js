'use strict';

// Declare global variables:

var allProducts = [];
var productNames = [];
var questionNumber = 1;
var alreadyUsed = [];

// Declare global functions:

function Product (name, friendlyName) {
  this.name = name;
  this.friendlyName = friendlyName;
  this.source = 'img/' + this.name + '.jpg';
  this.timesChosen = 0;
  this.percentClicked = 0;
  this.timesChosenMessage = 'Chosen: ' + this.timesChosen + ' times';
  this.percentClickedMessage = 'Percent of total: ' + this.percentClicked + '%';
  allProducts.push(this);
  productNames.push(this.name);
  this.calculatePercent = function() {
    this.percentClicked = (this.timesChosen / 25) * 100;
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

    parentElement.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    alreadyUsed.push(productNames[random]);
    console.log(alreadyUsed);
  }
}

renderProduct();

console.log(bag.timesChosen);

var optionA = document.getElementById('figure0');
optionA.addEventListener('click', function(){
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
  alreadyUsed.splice(0, 3);
  console.log(alreadyUsed);
  var counter = document.getElementById('counter');
  questionNumber += 1;
  counter.textContent = 'Question ' + questionNumber + ' of 25';
  console.log(questionNumber);
});
