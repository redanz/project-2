var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mysql = require('mysql');

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "food_db"
});

con.connect();

app.get('/', (req, res) => {
    res.send('index')
})

app.get('/inventory', (req, res) => {
    con.query('SELECT id, food_name FROM foods ORDER BY id ASC', (err, results, fields) => {
        res.render('pages/inventory', {
            foodInfo: results
        });
    })
})

app.post('/icons-to-home', (req, res) => {
    console.log(req.body.si)
});

app.listen(3000, () => {
    console.log('Listening on port 3000...')
})