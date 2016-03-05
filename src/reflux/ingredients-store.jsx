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
  postIngredient: function(text){

  },
  triggerUpdate: function() {
    this.trigger('change', this.ingredients);
  }
});

module.exports = IngredientStore;
