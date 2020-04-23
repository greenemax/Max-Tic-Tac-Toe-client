'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const gameEvents = require('./games/events')
const clickX = function() {
  var imgX = document.createElement('img')
  imgX.src = 'assets/images/xsmall.png';
  document.getElementById('top-left').appendChild(imgX);
}

const clickO = function() {
  var imgO = document.createElement('img')
  imgO.src = 'assets/images/letterO.png';
  document.getElementById('top-right').appendChild(imgO);
}

$(() => {
  $("#top-left").on("click", clickX)
  $("#top-right").on("click", clickO)
  $('#sign-up').on('submit', authEvents.onSignUp)
  // $('#sign-up').on('submit', function (event) {
  //   // stuff
  // })
})
