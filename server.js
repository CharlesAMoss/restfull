var express = require('express'),
	restful = require('node-restful'),
	bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
	mongoose = restful.mongoose;

var app = express();
	app.use(bodyParser());
    app.use(methodOverride());
	
mongoose.connect('mongodb://localhost/restful');

var ProductSchema = mongoose.Schema({
	name: String,
	sku: String, 
	price: Number
});
var Products = restful.model('products', ProductSchema);
Products.methods(['get', 'put', 'post', 'delete']);
Products.register(app, '/api/products');

app.listen(3000);
console.log('port 3000 is GO!');