const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// middlewares
const { validRegister } = require('./middlewares/validRegister');
const { validLogin } = require('./middlewares/validLogin');
const { validToken } = require('./middlewares/validToken');

// controllers
const { EncodeData } = require('./controllers/encode');
const { DecodeData } = require('./controllers/decode');
const { RegisterUser } = require('./controllers/registerUser');

// variables
const app = express();
const port = 8765;

app.use(bodyParser.json());
app.use(cors());

// POST: register user
app.post('/register', validRegister, RegisterUser);

// POST: encode endpoint
app.post('/encode', validLogin, EncodeData);

// POST: decode endpoint
app.post('/decode', validToken, DecodeData);

app.listen(port, () => {
    console.log('its working');
});