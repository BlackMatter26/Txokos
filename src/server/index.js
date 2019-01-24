const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const path = require('path');
const keys = require('./config/keys');

const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-TypeError, Accept');
  next();
});

// connects the routes for OAuth
// make cookie last 30 days
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  }),
);

require('./services/passport');
 // calls passport.js used for OAuth
app.use(passport.initialize());
app.use(passport.session());

require('./controllers/AuthController')(app);
const bodyParser = require('body-parser');
const HostController = require('./controllers/HostController.js');
const AttendeeController = require('./controllers/AttendeeController.js');
const UserController = require('./controllers/UserController.js');


app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
// app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));


/* -------------------General--------------------- */

// Apply style sheets
app.get('/api/app.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/styles/app.css'));
});

// Get all the events from the event table.
app.get('/api/events', UserController.getAllEvents, (req, res) => {
  res.status(200).json(res.locals.allEvents);
});

app.get('/api/food_list/:eventId', UserController.getFoodList, (req, res) => {
  res.status(200).json(res.locals.foodList);
});

// Get all attendees
app.get(
  '/api/invite_list/:eventId',
  UserController.getInviteList, // this gets the people who have rsvp'd yes & their food
  UserController.getAttendeeList, // this gets the people who haven't responded to the invite
  UserController.getEventDateTime, // this gets details of the event: host, date, location, time
  (req, res) => {
    const data = {
      invited: res.locals.attendeeList,
      rsvpd: res.locals.inviteList,
      dateTime: res.locals.eventDateTime,
      eventId: req.params.eventId,
    };
    res.status(200).json(data);
  },
);

/* -------------------Host--------------------- */

// Get all events for host
app.get('/api/event/:hostId', HostController.getHostEvents, (req, res) => {
  res.status(200).json(res.locals.hostEvents);
});

// Insert an event to the event table.
app.post('/api/new_event/:hostId', HostController.createEvent, (req, res) => {
  res.status(200).json(res.locals.eventId);
});

// add a food item for an event
app.post('/api/add_food/:eventId', HostController.addFoodItem, (req, res) => {
  // res.status(200).json(res.locals.eventFoodId);
  res.status(200).redirect('/');
});

// invite a user to an event
app.post(
  '/api/add_invite/:eventId',
  HostController.getUserId,
  HostController.addInvite,
  (req, res) => {
    // res.status(200).json(res.locals.userEventsId);
    res.status(200).redirect('/');
  },
);

/* --------------- Attendee --------------- */

// Get all invited events for a specific attendee EVEN the RSVP ones
app.get(
  '/api/attendee_invited_event/:attendeeId',
  AttendeeController.getInvitedEvents,
  AttendeeController.getAllInvitedEvents,
  (req, res) => {
    res.status(200).json(res.locals.allInvitedEvents);
  },
);

// Get all RSVP'd events for a specific attendee NOT only invited
app.get(
  '/api/attendee_rsvp_event/:attendeeId',
  AttendeeController.getRSVPEvents,
  (req, res) => {
    res.status(200).json(res.locals.attendeeRSVPEvents);
  },
);

// Setting RSVP to true, telling us they are going
app.post(
  '/api/rsvp_event/:attendeeId/:eventId',
  AttendeeController.rsvpEvent,
  (req, res) => {
    res.status(200).json(res.locals.updatedRsvpEvent);
  },
);

/* Claiming what food to bring. you would need to click the event first, so you would have event id
and attendee id which you can use to get the userEventId */
app.post(
  '/api/claim_food/:attendeeId/:eventId/:eventFoodId',
  AttendeeController.getRSVPId,
  AttendeeController.claimFood,
  (req, res) => {
    res.status(200).json(res.locals.updatedEventFoodId);
  },
);

app.use(express.static(path.resolve(__dirname, '../../build')));

app.listen(8080, () => console.log('Listening on port 8080!'));
