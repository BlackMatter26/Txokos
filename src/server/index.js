const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const HostController = require('./controllers/HostController.js');
const AttendeeController = require('./controllers/AttendeeController.js');
const UserController = require('./controllers/UserController.js');


app.use(express.static('dist'));
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
// app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));


/* -------------------General--------------------- */

// Get all the events from the event table.
app.get('/events', UserController.getAllEvents, (req, res) => {
  res.status(200).json(res.locals.allEvents);
});

/* -------------------Host--------------------- */

// Get all events for host
app.get('/event/:hostId', HostController.getHostEvents, (req, res) => {
  res.status(200).json(res.locals.hostEvents);
});

// Insert an event to the event table.
app.post('/new_event/:hostId', HostController.createEvent, (req, res) => {
  res.status(200).json(res.locals.eventId);
});

// add a food item for an event
app.post('/add_food/:eventId', HostController.addFoodItem, (req, res) => {
  res.status(200).json(res.locals.eventFoodId);
});

// invite a user to an event
app.post('/add_invite/:eventId', HostController.getUserId, HostController.addInvite, (req, res) => {
  res.status(200).json(res.locals.userEventsId);
});

/* --------------- Attendee --------------- */
// Get all invited events for a specific attendee EVEN the RSVP ones
app.get('/attendee_invited_event/:attendeeId', AttendeeController.getInvitedEvents, (req, res) => {
  res.status(200).json(res.locals.attendeeInvitedEvents);
});

// Get all RSVP'd events for a specific attendee NOT only invited
app.get('/attendee_rsvp_event/:attendeeId', AttendeeController.getRSVPEvents, (req, res) => {
  res.status(200).json(res.locals.attendeeRSVPEvents);
});

// Setting RSVP to true, telling us they are going
app.post('/rsvp_event/:attendeeId/:eventId', AttendeeController.rsvpEvent, (req, res) => {
  res.status(200).json(res.locals.updatedRsvpEvent);
});

/* Claiming what food to bring. you would need to click the event first, so you would have event id
and attendee id which you can use to get the userEventId */
app.post('/claim_food/:attendeeId/:eventId/:eventFoodId', AttendeeController.getRSVPId, AttendeeController.claimFood, (req, res) => {
  res.status(200).json(res.locals.updatedEventFoodId);
});


app.listen(8080, () => console.log('Listening on port 8080!'));
