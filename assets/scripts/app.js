'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

let totalClicks = 1
let currentPlayer = 'X'
let gameBoard = ['', '', '', '', '', '', '', '', '']
let checkForWinner = function() {
  if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
    checkForWinner = true
  } else if (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
    checkForWinner = true
  } else if (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
    checkForWinner = true
  } else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) {
    checkForWinner = true
  } else if (gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
    checkForWinner = true
  } else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) {
    checkForWinner = true
  } else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
    checkForWinner = true
  } else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
    checkForWinner = true
  } else {
    checkForWinner = false
  }
}
const nextTurn = function() {
  if (totalClicks === 1 ) {

    $(".gameStatus").empty()
    $(".gameStatus").append("It's player 2's turn")
    currentPlayer = 'X'
    totalClicks -= 1
  } else {

    $(".gameStatus").empty()
    $(".gameStatus").append("It's player 1's turn")
    currentPlayer = 'O'
    totalClicks += 1
  }
}

$(".box").each(function(index){
//calls all members of box class,  makes them an array like object. B/c we're using an array like object we use '.each' to iterate. We use the index parameter to access indices
  $(this).click(function(){
    //'this' refers to specific element clicked within .box
    if ($(this).text() === '') {
        nextTurn()
      $(this).text(currentPlayer)
      //assign Current Player to text of that box
      gameBoard[index] = currentPlayer
      //assigns matching index of gameBoard/.box array to current player
    }
  })
})

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
})
