const {resolve} = require('path');

module.exports = {
    index: (req, res) => res.sendFile(resolve(__dirname, '../views/index.html'))
}