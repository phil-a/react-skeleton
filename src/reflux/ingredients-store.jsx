var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var IngredientStore = Reflux.createStore({
  listenables: [Actions],
  getIngredients: function() {
    HTTP.get('/ingredients')
    .then(function(data) {
      this.ingredients = data;
      this.triggerUpdate();
    }.bind(this));
  },
  postIngredient: function(text) {
    if (!this.ingredients) {
      this.ingredients = [];
    }
    var ingredient = {
      "text": text,
      "id": Math.floor(Date.now() / 1000) + text
    };
    this.ingredients.push(ingredient);
    this.triggerUpdate();

    HTTP.post('/ingredients', ingredient)
    .then(function(response) {
      this.getIngredients();
    }.bind(this));
  },
  triggerUpdate: function() {
    this.trigger('change', this.ingredients);
  }
});

module.exports = IngredientStore;
