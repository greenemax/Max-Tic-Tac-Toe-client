const config = require('../config')
const store = require('../store')

const gameStart = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

const gameUpdate = function (index, currentPlayerToken){
  return $.ajax({
    url:config.apiUrl + 'games/' + store.game.id,
    method: 'PATCH',
    data: {
      "game": {
         "cell": {
         "index": index,
         "value": currentPlayerToken
            },
      "over": false
  }
},
    headers:{
      Authorization:'Token token=' + store.user.token
    },
  })
}

const gameIndex = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const gameId = function (data) {
  // console.log(data)
  return $.ajax({
    url: config.apiUrl + '/games/' + data.games.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  gameStart,
  gameUpdate,
  gameIndex,
  gameId
}
