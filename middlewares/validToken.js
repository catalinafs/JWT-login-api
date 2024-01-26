const validToken = (req, res, next) => {
    const regexs = {
        token: /.*/s,
    };

    const { body } = req;

    for (let value in regexs) {
        if (!body[value]) {
            return res.status(400).json({ msg: `Es requerido el campo ${value}` });
        }

        if (!regexs[value].test(body[value])) {
            return res.status(400).json({ msg: `El campo ${value} esta erroneo` });
        }
    }

    next();
}

module.exports = {
    validToken
}