var mongoose = require('mongoose');
var GroceryItem = require('./models/GroceryItem.js');

mongoose.connect('mongodb://localhost/grocery', function() {
	console.log('Connected to MongoDB...');

	mongoose.connection.db.dropDatabase();

	var items = [
		{name:'Ice Cream'},
		{name:'Waffles'},
		{name:'Candy', purchased: true},
		{name:'Snarks'}
	];

	items.forEach(function(item) {
		new GroceryItem(item).save();
	});
});