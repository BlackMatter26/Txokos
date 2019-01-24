const db = require('../models/database.js');

const attendeeController = {
  getInvitedEvents(req, res, next) {
    const { attendeeId } = req.params;
    db.query(
      'SELECT * from event_user WHERE attendee_id = ?',
      [attendeeId],
      (err, results) => {
        if (err) throw err;
        const events = [];
        results.forEach(event => {
          events.push(event.event_id);
        });
        console.log("get invited events", results)
        res.locals.attendeeInvitedEventsId = events;
        //   db.end();
        next();
      }
    );
  },

  getAllInvitedEvents(req, res, next) {
    db.query(
      `SELECT * FROM event WHERE event_id IN (${
        res.locals.attendeeInvitedEventsId
      })`,

      (err, results) => {
        if (err){
          console.log("in err")
          res.locals.allInvitedEvents = [];
        } 
        res.locals.allInvitedEvents = results;
        // db.end();
        next();
      }
    );
  },

  getRSVPEvents(req, res, next) {
    const { attendeeId } = req.params;
    db.query(
      'SELECT * from event_user WHERE attendee_id = ? AND rsvp = ?',
      [attendeeId, 1],
      (err, results) => {
        if (err) throw err;
        res.locals.attendeeRSVPEvents = results;
        //   db.end();
        next();
      }
    );
  },

  rsvpEvent(req, res, next) {
    const { attendeeId, eventId } = req.params;
    db.query(
      'UPDATE event_user SET rsvp = ? WHERE attendee_id = ? AND event_id = ?',
      [1, attendeeId, eventId],
      (err, results) => {
        if (err) throw err;
        res.locals.updatedRsvpEvent = results.changedRows;
        //   db.end();
        next();
      }
    );
  },

  getRSVPId(req, res, next) {
    const { attendeeId, eventId } = req.params;
    db.query(
      'SELECT event_user_id FROM event_user WHERE attendee_id = ? AND event_id = ?',
      [attendeeId, eventId],
      (err, results) => {
        if (err) throw err;
        const rsvpID = `rsvp${attendeeId}${eventId}`;
        res.locals[rsvpID] = results[0].event_user_id;
        //   db.end();
        next();
      }
    );
  },

  claimFood(req, res, next) {
    const { attendeeId, eventId, eventFoodId } = req.params;
    const rsvpID = `rsvp${attendeeId}${eventId}`;
    db.query(
      'UPDATE event_food SET event_user_id = ? WHERE event_food_id = ?',
      [res.locals[rsvpID], eventFoodId],
      (err, results) => {
        if (err) throw err;
        res.locals.updatedEventFoodId = results.changedRows;
        //   db.end();
        next();
      }
    );
  }
};

module.exports = attendeeController;
