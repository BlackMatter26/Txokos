const db = require('../models/database.js');

const hostController = {
  createEvent(req, res, next) {
    db.query(
      'INSERT INTO event SET ?',
      {
        host_id: req.params.hostId,
        time: req.body.eventTime,
        location: req.body.location,
        max_attend: req.body.maxAttend,
        event_name: req.body.eventName,
      },
      (err, results) => {
        if (err) throw err;
        res.locals.eventId = results.insertId;
        // db.end();
        next();
      },
    );
  },

  getHostEvents(req, res, next) {
    db.query(
      'SELECT * from event WHERE host_id = ?;',
      [req.params.hostId],
      (err, results) => {
        if (err) throw err;
        res.locals.hostEvents = results;
        // db.end();
        next();
      },
    );
  },

  addFoodItem(req, res, next) {
    console.log('addFoodItem getting hit');
    db.query(
      'INSERT INTO event_food SET ?',
      {
        event_id: req.params.eventId,
        food_name: req.body.foodName,
      },
      (err, results) => {
        if (err) throw err;
        res.locals.eventFoodId = results.insertId;
        // db.end();
        next();
      },
    );
  },

  getUserId(req, res, next) {
    db.query(
      'SELECT user_id from user WHERE email = ?',
      [req.body.email],
      (err, results) => {
        if (err) throw err;
        res.locals.userId = results[0].user_id;
        // db.end();
        next();
      },
    );
  },

  addInvite(req, res, next) {
    db.query(
      'INSERT INTO event_user SET ?',
      {
        attendee_id: res.locals.userId,
        event_id: req.params.eventId,
        rsvp: 0,
      },
      (err, results) => {
        if (err) throw err;
        res.locals.userEventsId = results.insertId;
        // db.end();
        next();
      },
    );
  },
};

module.exports = hostController;
