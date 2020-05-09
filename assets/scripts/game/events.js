const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
let gameOver = false
let totalClicks = 1
let currentPlayerToken = 'X'
const gameBoard = ['', '', '', '', '', '', '', '', '']

const boardHide = function () {
  if (gameOver === true) {
    $('.box').hide()
  }
}
const checkForWinner = function () {
  let winner = null
  if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
    winner = currentPlayerToken
    gameOver = true
    $('.gameStatus').empty()
    $('.gameStatus').append(currentPlayerToken + ' Wins the game')
    boardHide()
  } else if (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
    gameOver = true
    winner = currentPlayerToken
    $('.gameStatus').empty()
    $('.gameStatus').append(currentPlayerToken + ' Wins the game')
    boardHide()
  } else if (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
    gameOver = true
    winner = currentPlayerToken
    $('.gameStatus').empty()
    $('.gameStatus').append(currentPlayerToken + ' Wins the game')
    boardHide()
  } else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) {
    gameOver = true
    winner = currentPlayerToken
    $('.gameStatus').empty()
    $('.gameStatus').append(currentPlayerToken + ' Wins the game')
    boardHide()
  } else if (gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
    gameOver = true
    winner = currentPlayerToken
    $('.gameStatus').empty()
    $('.gameStatus').append(currentPlayerToken + ' Wins the game')
    boardHide()
  } else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) {
    gameOver = true
    winner = currentPlayerToken
    $('.gameStatus').empty()
    $('.gameStatus').append(currentPlayerToken + ' Wins the game')
    boardHide()
  } else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
    gameOver = true
    winner = currentPlayerToken
    $('.gameStatus').empty()
    $('.gameStatus').append(currentPlayerToken + ' Wins the game')
    boardHide()
  } else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
    gameOver = true
    winner = currentPlayerToken
    $('.gameStatus').empty()
    $('.gameStatus').append(currentPlayerToken + ' Wins the game')
    boardHide()
  } else if (gameBoard[0] !== '' && gameBoard[1] !== '' && gameBoard[2] !== '' && gameBoard[3] !== '' && gameBoard[4] !== '' && gameBoard[5] !== '' && gameBoard[6] !== '' && gameBoard[7] !== '' && gameBoard[8] !== '') {
    $('.gameStatus').empty()
    $('.gameStatus').append("It's a draw. Restart and play again")
    gameOver = true
    boardHide()
  }
}
const onNewGame = function (event) {
  event.preventDefault()
  api.gameStart()
    .then(ui.gameStartSuccess)
    .catch(ui.gameStartFailure)
}
const nextTurn = function () {
  if (totalClicks === 1) {
    $('.gameStatus').empty()
    $('.gameStatus').append("It's player 2's turn")
    currentPlayerToken = 'x'
    totalClicks -= 1
  } else {
    $('.gameStatus').empty()
    $('.gameStatus').append("It's player 1's turn")
    currentPlayerToken = 'o'
    totalClicks += 1
  }
}

const onGameIndex = function (event) {
  event.preventDefault()
  api.gameIndex()
    .then(ui.gameIndexSuccess)
    .catch(ui.gameIndexFailure)
}

$('.box').each(function (index) {
  // calls all members of box class,  makes them an array like object. B/c we're using an array like object we use '.each' to iterate. We use the index parameter to access indices
  $(this).click(function () {
    // 'this' refers to specific  element clicked within .box
    if ($(this).text() === '') {
      nextTurn()
      $(this).text(currentPlayerToken)
      // assign Current Player to text of that box
      gameBoard[index] = currentPlayerToken
      // assigns matching index of gameBoard/.box array to current player
      // checks for winner after each click
      checkForWinner()
      // console logging index and value to confirm click function is accurate
      console.log(currentPlayerToken)
      console.log(index)
      const update = {
        game: {
          cell: {
            index: index,
            value: currentPlayerToken
          },
          over: gameOver
        }
      }
      //this is where I pass the update info to the api
      api.gameUpdate(index, currentPlayerToken)
         .then(ui.updateGameComplete)
         .catch(ui.updateGameFailure)
      // this console.logs the api update based on the 'update' variable defined above.
      console.log(update)
    }
  })
})

module.exports = {
  checkForWinner,
  onNewGame,
  onGameIndex,
  currentPlayerToken
}
