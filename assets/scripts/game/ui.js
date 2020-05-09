'use strict'

const store = require('../store')

const gameIndexSuccess = function (data) {
  const gamesPlayed = data.games.length
  $('.game-display').html(`<div>You have played ${gamesPlayed} game(s)!</div>`)
}

const gameIndexFailure = function (error) {
  $('#message').text('Failed to show game list!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  return error
}

const gameStartSuccess = function (data) {
  $('.box').empty()
  $('.box').show()
  $('.gameStatus').empty()
  $('.gameStatus').append("Thanks for playing! Lets start with player 1's turn.")
  $('.board').show()
  $('.container').show()
  $('#gameActions').show()
  store.game = data.game
}

const gameStartFailure = function (error) {
  return error
}

const updateGameComplete = apiResponse => {
  return apiResponse
}

const updateGameFailure = function (error) {

  return error
}

const gameIdFailure = function (error) {
  $('.message').text('Something went wrong')
  return error
}

module.exports = {
  updateGameComplete,
  updateGameFailure,
  gameStartSuccess,
  gameStartFailure,
  gameIndexSuccess,
  gameIndexFailure,
  gameIdFailure
}
