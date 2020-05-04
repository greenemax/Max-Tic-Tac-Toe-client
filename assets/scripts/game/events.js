const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

let currentGameId
let gameOver = false
let gameTie = false
let totalClicks = 1
let currentPlayerToken = 'x'
let gameBoard = ['', '', '', '', '', '', '', '', '']

const checkForWinner = function() {
  let winner = null
  if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
    winner = currentPlayerToken
    gameOver = true
    $(".gameStatus").empty()
    $(".gameStatus").append(currentPlayerToken + " Wins the game")
    boardHide()
  } else if (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
    gameOver = true
    winner = currentPlayerToken
    $(".gameStatus").empty()
    $(".gameStatus").append(currentPlayerToken + " Wins the game")
    boardHide()
  } else if (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
    gameOver = true
    winner = currentPlayerToken
    $(".gameStatus").empty()
    $(".gameStatus").append(currentPlayerToken + " Wins the game")
    boardHide()
  }
  else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) {
    gameOver = true
    winner = currentPlayerToken
    $(".gameStatus").empty()
    $(".gameStatus").append(currentPlayerToken + " Wins the game")
    boardHide()
  }
  else if (gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
    gameOver = true
    winner = currentPlayerToken
    $(".gameStatus").empty()
    $(".gameStatus").append(currentPlayerToken + " Wins the game")
    boardHide()
  }
  else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) {
    gameOver = true
    winner = currentPlayerToken
    $(".gameStatus").empty()
    $(".gameStatus").append(currentPlayerToken + " Wins the game")
    boardHide()
  }
  else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
    gameOver = true
    winner = currentPlayerToken
    $(".gameStatus").empty()
    $(".gameStatus").append(currentPlayerToken + " Wins the game")
    boardHide()
    }
  else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
    gameOver = true
    winner = currentPlayerToken
    $(".gameStatus").empty()
    $(".gameStatus").append(currentPlayerToken + " Wins the game")
    boardHide()
  }
 else if (gameBoard[0] !== '' && gameBoard[1] !== '' && gameBoard[2] !== '' && gameBoard[3] !== '' && gameBoard[4] !== '' && gameBoard[5] !== '' && gameBoard[6] !== '' && gameBoard[7] !== '' && gameBoard[8] !== '') {
$(".gameStatus").empty()
$('.gameStatus').append("It's a draw. Restart and play again")
gameOver = true
gameTie = true
boardHide()
 }

const onAddToken = function (event) {
  if (gameOver === false) {
    const target = event.target
    const targetId = target.id
    if ($(target).text() === 'x' || $(target).text() === 'o') {
      $(".gameStatus").empty()
      $(".gameStatus").append('That space is already taken')
    } else {
      $(target).text(currentPlayerToken)
      gameBoard[targetId] = currentPlayerToken
      checkForWin()
      if (gameOver === false && isGameBoardFull()) {
        gameOver = true
        gameTie = true
      }
      api.updateGameBoard({
        id: currentGameId,
        index: targetId,
        gameToken: currentPlayerToken,
        over: gameOver
      })
      if (gameTie === true) {
        ui.gameTie()
      }
      else if (gameOver === true) {
        ui.winnerNotice(currentPlayerToken)
        currentPlayerToken = 'x'
      }
      else if (gameOver === false) {
        if (currentPlayerToken === 'x') {
          currentPlayerToken = 'o',
          ui.changeTurnSuccess(currentPlayerToken)
        } else {
          currentPlayerToken = 'x',
          ui.changeTurnSuccess(currentPlayerToken)
          // } console.log(gameBoard)
        }
      } else {
        currentPlayerToken = 'x'
        return
      }
    }
  }
}
const onIndexGame = function (event) {
  event.preventDefault()
  api.indexGame()
    .then(ui.gameIndexSuccess)
    .catch(ui.gameIndexFailure)
}
const onNewGame = function (event) {
  event.preventDefault()
  resetGame()

  api.newGame()
    .then((apiresponse) => {
      currentGameId = apiresponse.game.id
      ui.newGameSuccess()
    })
    .catch(ui.newGameFailure)
}

const nextTurn = function() {
  if (totalClicks === 1 ) {
    $(".gameStatus").empty()
    $(".gameStatus").append("It's player 2's turn")
    currentPlayerToken = 'x'
    totalClicks -= 1
  } else {
    $(".gameStatus").empty()
    $(".gameStatus").append("It's player 1's turn")
    currentPlayerToken = 'o'
    totalClicks += 1
  }
}

$(".box").each(function(index) {
  //calls all members of box class,  makes them an array like object. B/c we're using an array like object we use '.each' to iterate. We use the index parameter to access indices
$(this).click(function() {
//'this' refers to specific  element clicked within .box
if ($(this).text() ===  '') {
nextTurn()
$(this).text(currentPlayerToken)
//assign Current Player to text of that box
gameBoard[index] = currentPlayerToken
//assigns matching index of gameBoard/.box array to current player
api.updateGameBoard({
  id: currentGameId,
  index: index,
  gameToken: currentPlayerToken,
  over: gameOver
})
checkForWinner()
    }
  })
})

const resetGame = function () {
  gameOver = false
  gameBoard = ['', '', '', '', '', '', '', '', '']
  gameTie = false
}

const boardHide = function () {
  if (gameOver === true) {
    $('.box').hide()

  }
}

module.exports = {
  onIndexGame,
  checkForWinner,
  isGameBoardFull,
  onAddToken,
  onNewGame,
  currentPlayerToken
}
