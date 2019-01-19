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
    db.query('SELECT * from event_user WHERE event_id =?;', [req.params.eventId], (err, results) => {
      if (err) throw err;
      res.locals.inviteList = results;
      next();
    });
  },
};

module.exports = userController;
