'use strict'

const store = require('../store')


const gameTie = function () {
  $('#message').text(`Game Over, it's a tie! Play again?`)
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const invalidMove = function () {
  $('#message').text(`Invalid move!`)
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.log('Invalid Move - ui')
}

const gameIndexSuccess = function (data) {
  $('#message').text('Showed game list successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  const gamesArray = data.games
  const completedGames = gamesArray.filter((game) => game.over === true)
  $('#game-display').html(`You've completed ${completedGames.length} games.`)
}

const gameIndexFailure = function (error) {
  $('#message').text('Failed to show game list!')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const newGameSuccess = function (data) {
  $('#message').text('Created new game successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#gameBoard').show()
}

const newGameFailure = function (error) {
  $('#message').text('Failed to create new game!')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  gameTie,
  invalidMove,
  gameIndexFailure,
  gameIndexSuccess,
  newGameFailure,
  newGameSuccess
}
