const bcrypt = require('bcrypt');
const fs = require('fs');

const { useWriteFile } = require("../utils/useWriteFile");

const pathfile = './info.json';
let info;

fs.readFile(pathfile, 'utf8', (err, data) => {
    if (err) console.log('❗Error al leer el archivo: ', err);

    info = JSON.parse(data);
});

const RegisterUser = (req, res) => {
    const { body } = req;

    const exists = info.find((user) => { return user.email === body.email && bcrypt.compareSync(body.password, user.password) });

    if (exists) res.status(400).json({ msg: 'este usuario ya existe' });

    body['password'] = bcrypt.hashSync(body.password, 10);

    info.push(body);
    useWriteFile(pathfile, info);

    res.status(200).json({ msg: 'se agrego correctamente el usuario' });
}

module.exports = {
    RegisterUser
};