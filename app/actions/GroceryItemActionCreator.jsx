var dispatcher = require('./../dispatcher.js');
var React = require('react');

var GroceryItemActionCreator = {
	buy: function(item) {
		return (
			dispatcher.dispatch({
				payload: item,
				type: "grocery-item:buy"
			})
		);
	},
	unbuy: function(item) {
		return (
			dispatcher.dispatch({
				payload: item,
				type: "grocery-item:unbuy"
			})
		);
	},
	add: function(item) {
		return (
			dispatcher.dispatch({
				payload: item,
				type: "grocery-item:add"
			})
		);
	},
	delete: function(item) {
		return (
			dispatcher.dispatch({
				payload: item,
				type: "grocery-item:delete"
			})
		);
	}
};

module.exports = GroceryItemActionCreator;