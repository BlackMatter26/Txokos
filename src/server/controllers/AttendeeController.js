const db = require('../models/database.js');

const attendeeController = {

  getInvitedEvents(req, res, next) {
    const { attendeeId } = req.params;
    db.query('SELECT * from event_user WHERE attendee_id = ?', [attendeeId], (err, results) => {
      if (err) throw err;
      res.locals.attendeeInvitedEvents = results;
      db.end();
      next();
    });
  },

  getRSVPEvents(req, res, next) {
    const { attendeeId } = req.params;
    db.query('SELECT * from event_user WHERE attendee_id = ? AND rsvp = ?', [attendeeId, true], (err, results) => {
      if (err) throw err;
      res.locals.attendeeRSVPEvents = results;
      db.end();
      next();
    });
  },

  rsvpEvent(req, res, next) {
    const { attendeeId, eventId } = req.params;
    db.query('UPDATE event_user SET rsvp = ? WHERE attendee_id = ? AND event_id = ?', [true, attendeeId, eventId], (err, results) => {
      if (err) throw err;
      db.end();
      next();
    });
  },

  getRSVPId(req, res, next) {
    const { attendeeId, eventId } = req.params;
    db.query('SELECT event_user_id FROM event_user WHERE attendee_id = ? AND event_id = ?', [attendeeId, eventId], (err, results) => {
      if (err) throw err;
      const rsvpID = `rsvp${attendeeId}${eventId}`;
      console.log(`Is this going to be an array? ${results}`);
      res.locals[rsvpID] = results;
      db.end();
      next();
    });
  },

  claimFood(req, res, next) {
    const { attendeeId, eventId, eventFoodId } = req.params;
    const rsvpID = `rsvp${attendeeId}${eventId}`;
    db.query('UPDATE event_food SET event_user_id = ? WHERE event_food_id = ?', [res.locals[rsvpID], eventFoodId], (err, results) => {
      if (err) throw err;
      db.end();
      next();
    });
  },
};

module.exports = attendeeController;
