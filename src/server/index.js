const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const HostController = require('./controllers/HostController.js');

app.use(express.static('dist'));
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
// app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

// Get all the events from the event table.
app.get('/event', HostController.getAllEvent, (req, res) => {
  res.status(200).json(res.locals.results);
});

// Insert an event to the event table.
app.post('/new_event/:host_id', HostController.createEvent, (req, res) => {
  res.status(200).json(res.locals.eventId);
});


app.listen(8080, () => console.log('Listening on port 8080!'));
