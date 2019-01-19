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
  // general
  getAllEvents(req, res, next) {
    db.query('SELECT * from event', (err, results) => {
      if (err) throw err;
      res.locals.allEvents = results;
      db.end();
      next();
    });
  },

  // host
  getHostEvents(req, res, next) {
    db.query('SELECT * from event WHERE host_id = ?', [req.params.hostId], function (err, results){
      if(err) throw err;
      res.locals.hostEvents = results;
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
  
  getUserId(req, res, next) {
    db.query('SELECT user_id from user WHERE email = ?', [req.params.email], function(err, results){
      if(err) throw err;
      console.log(results);
      res.locals.userId = results;
      db.end();
      next();
    });
  },

  addInvite(req, res, next) {
    db.query('INSERT INTO event_user SET ?', {
      user_id: res.locals.userId,
      event_id: req.params.eventId,
    }, function (err, results){
      if(err) throw err;
      res.locals.userEventsId = results.insertId;
      db.end();
      next();
    });
  },
};

module.exports = hostController;
