'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const gameEvents = require('./games/events')

$("#top-right").click(function(){
  if ( $('#top-right').text() !== '')
  { console.log("Try again that spot's taken")
 } else if (totalClicks % 2 === 1 ) {
    $('#top-right').text('X')
  } else {
   $('#top-right').text('O')
 }
})
$("#top-left").click(function(){
  if ( $('#top-left').text() !== '')
  { console.log("Try again that spot's taken")
 } else if (totalClicks % 2 === 1 ) {
    $('#top-left').text('X')
  } else {
   $('#top-left').text('O')
  }
})
$("#top-mid").click(function(){
  if ( $('#top-mid').text() !== '')
  { console.log("Try again that spot's taken")
 } else if (totalClicks % 2 === 1 ) {
    $('#top-mid').text('X')
  } else {
   $('#top-mid').text('O')
  }
})
$("#mid-right").click(function(){
  if ( $('#mid-right').text() !== '')
  { console.log("Try again that spot's taken")
 } else if (totalClicks % 2 === 1 ) {
    $('#mid-right').text('X')
  } else {
   $('#mid-right').text('O')
  }
})
$("#mid-left").click(function(){
  if ( $('#mid-left').text() !== '')
  { console.log("Try again that spot's taken")
 } else if (totalClicks % 2 === 1 ) {
    $('#mid-left').text('X')
  } else {
   $('#mid-left').text('O')
  }
})
$("#mid-mid").click(function(){
  if ( $('#mid-mid').text() !== '')
  { console.log("Try again that spot's taken")
 } else if (totalClicks % 2 === 1 ) {
    $('#mid-mid').text('X')
  } else {
   $('#mid-mid').text('O')
  }
})
$("#bottom-right").click(function(){
  if ( $('#bottom-right').text() !== '')
  { console.log("Try again that spot's taken")
 } else if (totalClicks % 2 === 1 ) {
    $('#bottom-right').text('X')
  } else {
   $('#bottom-right').text('O')
  }
})
$("#bottom-left").click(function(){
  if ( $('#bottom-left').text() !== '')
  { console.log("Try again that spot's taken")
 } else if (totalClicks % 2 === 1 ) {
    $('#bottom-left').text('X')
  } else {
   $('#bottom-left').text('O')
  }
})
$("#bottom-mid").click(function(){
  if ( $('#bottom-mid').text() !== '')
  { console.log("Try again that spot's taken")
} else if (totalClicks % 2 === 1 ) {
    $('#bottom-mid').text('X')
  } else {
   $('#bottom-mid').text('O')
  }
})

let totalClicks = 1
$(".col-4").click(function() {
  totalClicks += 1
  if (totalClicks % 2 === 1 ) {
    console.log("It's Player One's Turn")
  } else if (totalClicks % 2 === 0){
    console.log("It's Player Two's Turn")
  }
  })

$(() => {
  // $('#sign-up').on('submit', function (event) {
  //   // stuff
  // })
})
