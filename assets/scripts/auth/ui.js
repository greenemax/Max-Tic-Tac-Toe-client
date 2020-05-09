'use strict'

const store = require('../store')
$('#unauthenticated').show()
$('.authenticated').hide()
$('.board').hide()
$('.container').hide()
$('#gameActions').hide()

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  // reset form:
  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  $('#message').text('Sign up failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')

  // reset form:
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  store.user = data.user

  $('.authenticated').show()
  $('#container').show()
  $('#unauthenticated').hide()
  $('#gameActions').show()
  // reset form:
  $('form').trigger('reset')
}

const signInFailure = function (error) {
  $('#message').text('Sign in failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')

  // reset form:
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  // reset form:
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('#message').text('Change password failed!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log(`changePasswordFailure ran. Error is:`, error)

  // reset form:
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')

  // Sign out success!
  // Hide the authenticated stuff, show the unauthenticated:
  $('.authenticated').hide()
  $('#unauthenticated').show()
  $('.board').hide()
  $('.container').hide()
  $('#gameActions').hide()
  // clear out the user from the store object
  // set `user` to be `null`
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordFailure,
  changePasswordSuccess,
  signOutFailure,
  signOutSuccess
}
