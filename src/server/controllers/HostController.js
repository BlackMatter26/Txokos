const db = require('../models/database.js');

const hostController = {
  createEvent(req, res, next) {
    db.query('INSERT INTO event SET ?', {
      host_id: req.params.hostId,
      time: req.body.eventTime,
      location: req.body.location,
      max_attend: req.body.maxAttend,
      event_name: req.body.eventName,
    }, (err, results) => {
      if (err) throw err;
      res.locals.eventId = results.insertId;
      db.end();
      next();
    });
  },

  getAllEvent(req, res, next) {
    db.query('SELECT * from event', (err, results) => {
      if (err) throw err;
      res.locals.results = results;
      db.end();
      next();
    });
  },

  getEvents(req, res, next) {
    db.query('SELECT * from event WHERE host_id = ?', [req.body.hostId], function (err, results){
      if(err) throw err;
      res.locals.results = results;
      db.end();
      next();
    });
  },

  addFoodItem(req, res, next) {
    db.query('INSERT INTO event_food SET ?', {
      event_id: req.params.eventId,
      food_name: req.body.foodName,
    }, function (err, results){
      if(err) throw err;
      res.locals.eventFoodId = results.insertId;
      db.end();
      next();
    });
  },

  addInvite(req, res, next) {
    db.query('INSERT INTO event_user SET ?', {
      user_id: req.body.userId,
      event_id: req.params.eventId,
    }, function (err, results){
      if(err) throw err;
      res.locals.userEventsId = results.insertID;
      db.end();
      next();
    });
  },

  getUserId(req, res, next) {
    db.query('SELECT user_id from USERS WHERE email = ?', [req.params.email], function(err, results){
      if(err) throw err;
      res.locals.userId = results;
      db.end();
      next();
    });
  }
};

module.exports = hostController;
