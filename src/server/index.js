const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const HostController = require('./controllers/HostController.js');

app.use(express.static('dist'));
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
// app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));


/* -------------------General--------------------- */

// Get all the events from the event table.
app.get('/events', HostController.getAllEvents, (req, res) => {
  res.status(200).json(res.locals.allEvents);
});

/* -------------------Host--------------------- */

// Get all events for host
app.get('/event/:hostId', HostController.getHostEvents, (req, res) => {
  res.status(200).json(res.locals.singleEvent);
});

// Insert an event to the event table.
app.post('/new_event/:host_id', HostController.createEvent, (req, res) => {
  res.status(200).json(res.locals.eventId);
});

//add a food item for an event
app.post('/add_food/:eventId', HostController.addFoodItem, (req, res) => {
  res.status(200).json(res.locals.eventFoodId);
});

//invite a user to an event
app.post('/add_invite/:eventId', HostController.getUserId, HostController.addInvite, (req, res) => {
  res.status(200).json(res.locals.userEventsId);
});
app.listen(8080, () => console.log('Listening on port 8080!'));
