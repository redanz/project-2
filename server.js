var express = require('express')
var app = express()

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.send('index')
})

app.get('/inventory', function (req, res) {
    var imageData = [1, 2, 3, 4, 5, 6];
    var imageName = ['Apple', 'Banana', 'Watermelon', 'Mango', 'Peach', 'Tomato'];

    res.render('pages/inventory', {
        imageData, imageName
    });
})

app.listen(3000, () => {
    console.log('Listening on port 3000...')
})