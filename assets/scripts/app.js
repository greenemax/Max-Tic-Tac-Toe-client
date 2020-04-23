'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const gameEvents = require('./games/events')

let totalClicks = 0
$(".col-4").click(function() {
  totalClicks += 1
  if (totalClicks === 1 ) {
    let imgX = document.createElement('img')
    imgX.src = 'assets/images/xsmall.png'
    document.getElementById('top-left').appendChild(imgX)
  } else {
    var imgO = document.createElement('img')
    imgO.src = 'assets/images/letterO.png'
    document.getElementById('top-right').appendChild(imgO)
  }
})

$(() => {
  $("#top-left").on("click", clickX)
  $("#top-right").on("click", clickO)
  $('#sign-up').on('sub mit', authEvents.onSignUp)
  // $('#sign-up').on('submit', function (event) {
  //   // stuff
  // })
})
