const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onCreateGame = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.create()
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  api.update()
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}
const onShowGame = function (event) {
  event.preventDefault()
  api.show()
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}
const onIndexGame = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}
module.exports = {
  onCreateGame,
  onUpdateGame,
  onShowGame,
  onIndexGame
}
