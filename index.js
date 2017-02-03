var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('./config');
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');

var corsOptions = {
  origin: 'http://localhost:8999',
  resave: true,
  saveUninitialized: true
};

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


app.use(cors(corsOptions));
app.use(session({
  secret: config.secret
}));

// ENDPOINTS

app.post('/api/login', userCtrl.login);

app.get('/api/profiles', profileCtrl.getFriends);

app.post('/api/changeCreds', userCtrl.changeCreds);


app.listen(3000, function() {
  console.log('express is running on port 3000')

});