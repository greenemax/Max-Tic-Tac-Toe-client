'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
let totalClicks = 1
let currentPlayer = "X"
const gameBoard = ['', '', '', '', '', '', '', '', '']
const checkForWinner = function() {
  if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
    console.log('You Won!')
  } else if (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
    console.log('You Won!')
  } else if (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
    console.log('You Won!')
  }
}

const nextTurn = function() {
  totalClicks += 1

  if (totalClicks % 2 === 1 ) {
    console.log("It's Player One's Turn")
    currentPlayer = 'X'
  } else if (totalClicks % 2 === 0){
    console.log("It's Player Two's Turn")
    currentPlayer = 'O'
  }
  }
$("#top-right").click(function() {
  if ( $('#top-right').text() !== '')
  { console.log("Try again that spot's taken")
  totalClicks -= 1
 } else if (totalClicks % 2 === 1 ) {
    $('#top-right').text('X')
    gameBoard[2] = 'X'
  } else {
    $('#top-right').text('O')
    gameBoard[2] = 'O'
 }
 checkForWinner()
})
$('#top-left').click(function () {
  if ($('#top-left').text() !== '') { console.log("Try again that spot's taken")
    totalClicks -= 1
 } else if (totalClicks % 2 === 1) {
    $('#top-left').text('X')
    gameBoard[0] = 'X'
  } else {
   $('#top-left').text('O')
    gameBoard[0] = '0'
  }
   checkForWinner()
  })
$("#top-mid").click(function() {
  if ( $('#top-mid').text() !== '')
  { console.log("Try again that spot's taken")
  totalClicks -= 1
 } else if (totalClicks % 2 === 1 ) {
    $('#top-mid').text('X')
    gameBoard[1] = 'X'
  } else {
    $('#top-mid').text('O')
    gameBoard[1] = 'O'
  }
   checkForWinner()
  })
$("#mid-right").click(function(){
  if ( $('#mid-right').text() !== '')
  { console.log("Try again that spot's taken")
  totalClicks -= 1
 } else if (totalClicks % 2 === 1 ) {
    $('#mid-right').text('X')
    gameBoard[5] = 'X'
  } else {
   $('#mid-right').text('O')
   gameBoard[5] = 'O'
 }
  checkForWinner()
 })
$("#mid-left").click(function(){
  if ( $('#mid-left').text() !== '')
  { console.log("Try again that spot's taken")
  totalClicks -= 1
 } else if (totalClicks % 2 === 1 ) {
    $('#mid-left').text('X')
    gameBoard[3] = 'X'
  } else {
   $('#mid-left').text('O')
   gameBoard[3] = 'O'
 }
  checkForWinner()
 })
$("#mid-mid").click(function(){
  if ( $('#mid-mid').text() !== '')
  { console.log("Try again that spot's taken")
  totalClicks -= 1
 } else if (totalClicks % 2 === 1 ) {
    $('#mid-mid').text('X')
    gameBoard[4] = 'X'
  } else {
   $('#mid-mid').text('O')
   gameBoard[4] = 'O'
 }
  checkForWinner()
 })
$("#bottom-right").click(function(){
  if ( $('#bottom-right').text() !== '')
  { console.log("Try again that spot's taken")
  totalClicks -= 1
 } else if (totalClicks % 2 === 1 ) {
    $('#bottom-right').text('X')
    gameBoard[8] = 'X'
  } else {
   $('#bottom-right').text('O')
   gameBoard[8] = 'O'
 }
  checkForWinner()
 })
$("#bottom-left").click(function(){
  if ( $('#bottom-left').text() !== '')
  { console.log("Try again that spot's taken")
  totalClicks -= 1
 } else if (totalClicks % 2 === 1 ) {
    $('#bottom-left').text('X')
    gameBoard[6] = 'X'
  } else {
   $('#bottom-left').text('O')
   gameBoard[6] = 'O'
 }
  checkForWinner()
 })
$("#bottom-mid").click(function(){
  if ( $('#bottom-mid').text() !== '')
  { console.log("Try again that spot's taken")
  totalClicks -= 1
} else if (totalClicks % 2 === 1 ) {
    $('#bottom-mid').text('X')
    gameBoard[7] = 'X'
  } else {
   $('#bottom-mid').text('O')
   gameBoard[7] = 'X'
 }
  checkForWinner()
 })
$(".col-4").click(nextTurn)

$(() => {
 $('#sign-up').on('submit', authEvents.onSignUp)
 $('#sign-in').on('submit', authEvents.onSignIn)
 $('#change-password').on('submit', authEvents.onChangePassword)
 $('#sign-out').on('submit', authEvents.onSignOut)
})
