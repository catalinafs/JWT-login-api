const fs = require('fs');

const useReadFile = (path) => {
    fs.readFileSync(path, 'utf8', (err, data) => {
        if (err) console.log(err);

        return JSON.parse(data);
    });
}

module.exports = {
    useReadFile
};