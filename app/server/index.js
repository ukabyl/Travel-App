const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const async = require('express-async-errors');
const fetch = require('node-fetch');

const data = {};

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./dist'));

const PORT = 8080;
app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/add', addInfo);

function addInfo(req, res) {
    res.send(data);
}