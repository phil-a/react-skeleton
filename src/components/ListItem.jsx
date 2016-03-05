var React = require('react');

var ListItem = React.createClass({
    render: function() {
      return (
        <li>
            <a href ={this.props.pokemon_url}>
              <h4>{this.props.pokemon}</h4>
            </a>
        </li>
      );
    }
});

module.exports = ListItem;
