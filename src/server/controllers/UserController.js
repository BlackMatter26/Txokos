const db = require('../models/database.js');

const userController = {

  getAllEvents(req, res, next) {
    db.query('SELECT * from event;', (err, results) => {
      if (err) throw err;
      res.locals.allEvents = results;
      // db.end();
      next();
    });
  },

  getFoodList(req, res, next) {
    db.query('SELECT * from event_food WHERE event_id = ?;', [req.params.eventId], (err, results) => {
      if (err) throw err;
      res.locals.foodList = results;
      next();
    });
  },

  getInviteList(req, res, next) {
    db.query(
      `SELECT u.name, eu.attendee_id, eu.rsvp, ef.food_name, ef.event_user_id 
      FROM event_user eu, user u, event_food ef
      WHERE eu.event_user_id = ef.event_user_id
      AND u.user_id = eu.attendee_id
      AND ef.event_id = ?;`,
      [req.params.eventId], (err, results) => {
        if (err) throw err;
        res.locals.inviteList = results;
        next();
      },
    );
  },

  getAttendeeList(req, res, next) {
    db.query(
      `SELECT u.name
      FROM user u, event_user eu
      WHERE u.user_id = eu.attendee_id
      AND eu.rsvp = 0
      AND eu.event_id = ?;`,
      [req.params.eventId], (err, results) => {
        if (err) throw err;
        res.locals.attendeeList = results;
        next();
      },
    );
  },

  getEventDateTime(req, res, next) {
    db.query(
      `SELECT u.name, e.location, e.time
      FROM user u, event e
      WHERE u.user_id = e.host_id;`,
      (err, results) => {
        if (err) throw err;
        res.locals.eventDateTime = results;
        next();
      },
    );
  },
};

module.exports = userController;
