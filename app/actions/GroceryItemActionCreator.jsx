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
	},
	update: function(item) {
		return (
			dispatcher.dispatch({
				payload: item,
				type: "grocery-item:update"
			})
		);
	}
};

module.exports = GroceryItemActionCreator;