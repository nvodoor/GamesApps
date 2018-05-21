const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const dbConfig = require('./db-config.js');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: dbConfig.user,
    password: dbConfig.password,
    database: 'trigames'
});

app.use(express.static(path.join(__dirname, '../public')))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

app.get('/ping', function (req, res) {
    return res.send('pong')
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.post('/post/battleship', function (req, res) {
    console.log(req.body);
    let querystring = 'INSERT INTO battleship (winner) VALUES (?)'
    connection.query(querystring, [req.body.winner], function (err, res) {
        if (err) {
            console.log('err');
        } else {
            console.log('worked');
        }
    })
    res.status(201).send('success');
})

app.post('/post/tictactoe', function (req, res) {
    console.log(req.body);
    const querystring1 = 'INSERT INTO tictactoe (victor) VALUES (?)'
    connection.query(querystring1, [req.body.victor], function (err, res) {
        if (err) {
            console.log('err');
        } else {
            console.log('worked');
        }
    })
    res.status(201).send('success');
})

app.post('/post/RPS', function (req, res) {
    console.log(req.body);
    const querystring2 = 'INSERT INTO RPS (pscore, cscore, win) VALUES (?, ?, ?)'
    connection.query(querystring2, [req.body.pscore, req.body.cscore, req.body.win], function (err, res) {
        if (err) {
            console.log('err');
        } else {
            console.log('worked');
        }
    })
    res.status(201).send('success');
})

app.get('/get/battleship', function (req, res) {
    const getstring = 'SELECT * FROM battleship';
    let load = []
    connection.query(getstring, function (err, results) {
        if (err) {
            console.log(err);
            res.status(500).send("There was an error.")
        } else {
            load = JSON.stringify(results);
            console.log(load);
            res.status(201).send(load)
        }
    })
})

app.get('/get/RPS', function (req, res) {
    const getstring1 = 'SELECT * FROM RPS';
    let loadone = []
    connection.query(getstring1, function (err, results) {
        if (err) {
            res.status(500).send("There was an error.")
        } else {
            loadone = JSON.stringify(results);
            res.status(201).send(loadone)
        }
    })
})

app.get('/get/tictactoe', function (req, res) {
    const getstring2 = 'SELECT * FROM tictactoe';
    let loadtwo = []
    connection.query(getstring2, function (err, results) {
        if (err) {
            res.status(500).send("There was an error.")
        } else {
            loadtwo = JSON.stringify(results);
            res.status(201).send(loadtwo)
        }
    })
})

app.listen(process.env.PORT || 8080);
