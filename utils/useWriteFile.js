const fs = require('fs');

const useWriteFile = (path, data) => {
    fs.writeFileSync(path, JSON.stringify(data), 'utf8');
}

module.exports = {
    useWriteFile
};