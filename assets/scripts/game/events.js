const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onCreateGame = function (event) {
  event.preventDefault()
  api.create()
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  api.create()
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}
module.exports = {
  onCreateGame,
  onUpdateGame
}
