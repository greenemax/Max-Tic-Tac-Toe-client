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

const onUpdateSuccess = function (formData) {
  $('#message').text('Game successfully updated')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onUpdateSuccess ran. Data is :', formData)
  store.game = data.game // save game data so we can use the ID when we do an update
}

const onUpdateFailure = function (error) {
  $('#message').text('Error updating game')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('onUpdateFailure ran. Error is :', error)
}

const onShowSuccess = function (data) {
  $('#message').text('Game successfully shown')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onShowSuccess ran. Data is :', data)
  store.game = data.game // save game data so we can use the ID when we do an update
}
const onShowFailure = function (error) {
  $('#message').text('Error showing game')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('onShowFailure ran. Error is :', error)
}
const onIndexSuccess = function (data) {
  $('#message').text('Game successfully indexed')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onIndexSuccess ran. Data is :', data)
  store.game = data.game // save game data so we can use the ID when we do an update
}
const onIndexFailure = function (error) {
  $('#message').text('Error indexing game')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('onIndexFailure ran. Error is :', error)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onShowFailure,
  onShowSuccess,
  onIndexFailure,
  onIndexSuccess
}
