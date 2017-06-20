'use strict';

// Declare global variables:

var allProducts = [];
var productNames = [];



// Declare global functions:

function Product (name, friendlyName) {
  this.name = name;
  this.friendlyName = friendlyName;
  this.source = this.name + '.jpg';
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
var sweep = new Product('sweep', 'Baby Sleeping Outfit');
var tauntaun = new Product('tauntaun', 'Dead Tauntaun Sleeping Bag');
var unicorn = new Product('unicorn', 'Can of Unicorn Meat');
var usb = new Product('usb', 'USB Tentacle Arm');
var water_can = new Product('water_can', 'Functional Water Can');
var wine_glass = new Product('wine_glass', 'Best Wine Glass');

console.log(allProducts);
