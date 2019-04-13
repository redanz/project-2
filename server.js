var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('index')
})

app.get('/inventory', (req, res) => {
    var imageData = [1, 2, 3, 4, 5, 6];
    var imageName = ['Apple', 'Banana', 'Watermelon', 'Mango', 'Peach', 'Tomato'];

    res.render('pages/inventory', {
        imageData, imageName
    });
})

app.post('/icons-to-home', (req, res) => {
    console.log(req.body.si)
});

app.listen(3000, () => {
    console.log('Listening on port 3000...')
})