'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

let over = false
let totalClicks = 1
let currentPlayer = 'X'
const gameBoard = ['', '', '', '', '', '', '', '', '']

const checkForWinner = function() {
  let winner = null
  if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
    winner = currentPlayer
    over = true
    $(".gameStatus").empty()
    $(".gameStatus").append(currentPlayer + " Wins the game")
  } else if (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
    over = true
    winner = currentPlayer
    $(".gameStatus").empty()
    $(".gameStatus").append(currentPlayer + " Wins the game")
  } else if (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
    over = true
    winner = currentPlayer
    $(".gameStatus").empty()
    $(".gameStatus").append(currentPlayer + " Wins the game") }
  else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) {
    over = true
    winner = currentPlayer
    $(".gameStatus").empty()
    $(".gameStatus").append(currentPlayer + " Wins the game") }
  else if (gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
    over = true
    winner = currentPlayer
    $(".gameStatus").empty()
    $(".gameStatus").append(currentPlayer + " Wins the game") }
  else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) {
    over = true
    winner = currentPlayer
    $(".gameStatus").empty()
    $(".gameStatus").append(currentPlayer + " Wins the game") }
  else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
    over = true
    winner = currentPlayer
    $(".gameStatus").empty()
    $(".gameStatus").append(currentPlayer + " Wins the game") }
  else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
    over = true
    winner = currentPlayer
    $(".gameStatus").empty()
    $(".gameStatus").append(currentPlayer + " Wins the game") }
   else if (gameBoard[0] !== '' && gameBoard[1] !== '' && gameBoard[2] !== '' && gameBoard[3] !== '' && gameBoard[4] !== '' && gameBoard[5] !== '' && gameBoard[6] !== '' && gameBoard[7] !== '' && gameBoard[8] !== '') {
    $(".gameStatus").empty()
    $(".gameStatus").append("It's a draw play again") }

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
    //'this' refers to specifi c element clicked within .box
    if ($(this).text() ===  '') {
        nextTurn()
      $(this).text(currentPlayer)
      //assign Current Player to text of that box
      gameBoard[index] = currentPlayer
      //assigns matching index of gameBoard/.box array to current player
      checkForWinner()
    }
  })
})

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#game-create').on('submit', gameEvents.onCreateGame)
  $('#game-update').on('submit', gameEvents.onUpdateGame)
})
