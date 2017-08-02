var express = require('express');
var app = express();
var request = require('request');

app.get('/:cep', function(req, res) {
	request('http://correiosapi.apphb.com/cep/' + req.params.cep, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			res.send(JSON.parse(body));
		}
		else {
			res.send('Ocorreu um erro.');
		}
	});
});

app.listen(3000, function() {
	console.log('Example app listening on port 3000');
});