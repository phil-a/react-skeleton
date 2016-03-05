var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var PokemonStore = Reflux.createStore({
  listenables: [Actions],
  getPokemons: function() {
    HTTP.get('/pokemon/')
    .then(function(data) {
      this.pokemons = data;
      this.triggerUpdate();
    }.bind(this));
  },
  triggerUpdate: function() {
    this.trigger('change', this.pokemons);
  }
});

module.exports = PokemonStore;
