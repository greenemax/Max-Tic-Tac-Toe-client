'use strict'

const store = require('../store')

const onCreateSuccess = function (data) {
  $('#message').text('Game successfully created')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onCreateSuccess ran. Data is :', data)
  store.game = data.game // save game data so we can use the ID when we do an update
}

const onCreateFailure = function (error) {
  $('#message').text('Error creating game')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('onCreateFailure ran. Error is :', error)
}

const onUpdateSuccess = function (data) {
  $('#message').text('Game successfully created')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onUpdateSuccess ran. Data is :', data)
  store.game = data.game // save game data so we can use the ID when we do an update
}

const onUpdateFailure = function (error) {
  $('#message').text('Error updating game')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('onUpdateFailure ran. Error is :', error)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onUpdateSuccess,
  onUpdateFailure
}
