var dispatcher = require('./../dispatcher.js');
var React = require('react');

var GroceryItemActionCreator = {
	add: function(item) {
		return (
			dispatcher.dispatch({
				payload: item,
				type: "grocery-item:add"
			})
		);
	}
};

module.exports = GroceryItemActionCreator;