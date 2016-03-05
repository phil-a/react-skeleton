var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List.jsx');

//Grab the DOM, insert the list, and put it in element that has ingredients id
ReactDOM.render(<List />, document.getElementById('pokemons'));
