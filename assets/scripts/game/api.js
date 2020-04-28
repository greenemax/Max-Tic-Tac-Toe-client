const config = require('../config')
const store = require('../store')

const create = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}' // empty object
  })
}

const update = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games' + data.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

const show = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games' + data.game.id,
    method: 'get',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

const index = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'get',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

module.exports = {
  create,
  update,
  show,
  index
}
