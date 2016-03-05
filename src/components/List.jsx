var React = require('react');
var ListItem = require('./ListItem.jsx'); //import non-npm-module
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var PokemonStore = require('../reflux/pokemons-store.jsx');

var List = React.createClass({
  mixins:[Reflux.listenTo(PokemonStore, 'onChange')],
  getInitialState: function() {
    return { pokemons:[]};
  },
  componentWillMount: function() {
    Actions.getPokemons();
  },
  onChange: function(event, pokemons) {
    this.setState({pokemons: pokemons.results});
  },
  render: function() {
    var listItems = this.state.pokemons.map(function(item) {
      return <ListItem key={item.id} pokemon={item.name} pokemon_url={item.url}/>;
    });

    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    );
  }
});

module.exports = List;
