const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onClick = function (event) {
  event.preventDefault()
  console.log('Piece was clicked')
}
