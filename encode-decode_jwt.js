const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 8765;

app.use(bodyParser.json());

app.post('/encode', (req, res) => {
    const { body } = req;

    const encode = jwt.sign(body, process.env.SECRET_KEY);

    res.status(200).json({ token: encode });
});

app.post('/decode', (req, res) => {
    const { token } = req.body;

    const decode = jwt.decode(token, process.env.SECRET_KEY)

    res.status(200).json({ info: decode });
});

app.listen(port, () => {
    console.log('its working');
});