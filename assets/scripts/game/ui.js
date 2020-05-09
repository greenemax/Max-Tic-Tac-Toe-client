'use strict'

const store = require('../store')

// const gameIndexSuccess = function (data) {
//   $('#message').text('Showed game list successfully!')
//   $('#message').removeClass()
//   $('#message').addClass('success')
//   const gamesArray = data.games
//   const completedGames = gamesArray.filter((game) => game.over === true)
//   $('#game-display').html(`You've completed ${completedGames.length} games.`)
// }
//
// const gameIndexFailure = function (error) {
//   $('#message').text('Failed to show game list!')
//   $('#message').removeClass()
//   $('#message').addClass('failure')
//   return error
// }

const gameStartSuccess = function (data) {
  $('.board').show()
  $('.container').show()
  $('#gameActions').show()
  store.game = data.game
  console.log(store.game)
}

const gameStartFailure = function (error) {
  return error
}

const updateGameComplete = apiResponse => {
  console.log('update complete')
}

const updateGameFailure = function (error) {
  console.log('update failed')
  return error
}

const gameIndexSuccess = function (data) {
  const gamesPlayed = data.games.length
  console.log(data.games)
  $('.gamesPlayedTotal').html(`<h4>You have played ${gamesPlayed} game(s)!</h4>`)
}

const gameIndexFailure = function (error) {
  $('.message').text('Something went wrong')
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
