'use strict'

const onCreateSuccess = function (data) {
  $('#message').text('Game successfully created')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onCreateSuccess ran. Data is :', data)
}

const onCreateFailure = function (error) {
  $('#message').text('Error creating game')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onCreateFailure ran. Error is :', error)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure
}
