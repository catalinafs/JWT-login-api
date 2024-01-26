const express = require('express');
const bodyParser = require('body-parser');

const { validUser } = require('./middlewares/validUser');
const { validToken } = require('./middlewares/validToken');
const { EncodeData } = require('./controllers/encode');
const { DecodeData } = require('./controllers/decode');

const app = express();
const port = 8765;

app.use(bodyParser.json());

// POST: encode endpoint
app.post('/encode', validUser, EncodeData);

// POST: decode endpoint
app.post('/decode', validToken, DecodeData);

app.listen(port, () => {
    console.log('its working');
});