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
    db.query('SELECT * from event_food WHERE event_id = ?;', [req.params.eventId], (err, results) =>{
      if (err) throw err;
      res.locals.foodList = results;
      next();
    });
  },

  getInviteList(req, res, next) {
    console.log("GET INVITE LIST")
    
    db.query(`SELECT u.name, eu.attendee_id, eu.rsvp, ef.food_name, ef.event_user_id 
    FROM event_user eu, user u, event_food ef
    WHERE eu.event_user_id = ef.event_user_id
    AND u.user_id = eu.attendee_id
    AND ef.event_id =?;`, [req.params.eventId], (err, results) => {
      if (err) throw err;
      console.log("result: ", results);
      res.locals.inviteList = results;
      next();
    });
  },
};

module.exports = userController;
