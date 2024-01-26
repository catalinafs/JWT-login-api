const fs = require('fs');
const jwt = require('jsonwebtoken');

const pathfile = './info.json';

let info;

fs.readFile(pathfile, 'utf8', (err, data) => {
    if (err) console.log('❗Error al leer el archivo: ', err);

    info = JSON.parse(data);
});

const EncodeData = (req, res) => {
    const { email, password } = req.body;

    const userData = info.find((user) => { return user.email === email && user.password === password });

    if (!userData || userData === undefined) res.status(404).json({ msg: 'Usuario no encontrado' });

    const encode = jwt.sign(userData, process.env.SECRET_KEY);

    res.status(200).json({ token: encode });
}

module.exports = {
    EncodeData
};