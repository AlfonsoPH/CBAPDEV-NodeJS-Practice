const http = require('http');
const dotenv = require('dotenv');
const express = require('express');

dotenv.config();
const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

const app = express();	
app.use(bodyParser.urlencoded ({ extended: false }));

app.listen(port, hostname, function() {
	console.log('Server running at: ');
	console.log('http://' + hostname + ':' + port + '/');
});