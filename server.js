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
    var selectedItem = req.body.si;
    var currentUser = 1; //this should be req.sessions.user_id
    con.query('DELETE FROM user_data WHERE user_id = 1', (err, results, fields) => {
        if (err) throw err;
        console.log('deleted all rows for current user...')
    })

    for (let i in selectedItem) {
        con.query('INSERT INTO user_data (user_id, food_id, purchase_time) VALUES (?,?,?)', [1, selectedItem[i], '2019-04-10 12:00:00'], (err, results, fields) => {
            if (err) throw err;
            console.log(`Added food_id of ${selectedItem[i]} into user_data table, current user : ${currentUser}...`);
        })
    }
});

app.listen(3000, () => {
    console.log('Listening on port 3000...')
})