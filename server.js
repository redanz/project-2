var express = require('express')
var app = express()

app.use(express.static("public"));

app.get('/', function (req, res) {
    res.send('index')
})

app.listen(3000, () => {
    console.log('Listening on port 3000...')
})