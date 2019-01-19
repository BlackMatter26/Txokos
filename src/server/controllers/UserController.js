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

  },

  getInvitedPeople(req, res, next) {

  },
};

module.exports = userController;
