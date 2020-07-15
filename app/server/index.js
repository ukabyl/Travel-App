// Require neccessary packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create data array for trips
const data = [];

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./dist'));

const PORT = 8080;
app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

// Sending static file
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/add', addTrip);

// Handling endpoint /add for saving received data from client request
function addTrip(req, res) {
    if(!req.body) {
        res.status(400).json('Bad Request');
    } else {
        const trip = req.body.body;
        if(data.length) {
            let isHave = false;
            data.forEach(dataTrip => {
                if(dataTrip.departure_point === trip.departure_point) {
                    isHave = true;
                }
            })
            if(!isHave) {
                data.push(trip);
            }
        } else {
            data.push(trip);
        }
        res.status(201).send(data);
    }
}