const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const db = require('../models/database.js');

passport.serializeUser((user,done) => {
  console.log("passport.js the user in serialize is ", user);
  done(null, user[0].user_id);
});

passport.deserializeUser((user_id , done) => {
  console.log("the user id in deserialize user ",user_id);
  db.query(
    'SELECT *FROM user WHERE user_id=?',
    user_id, (err,user)=>{
      // if(err) throw err;
      done(null, user);
    }
  )
})

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },
      (accessToken, refreshToken, profile, done) => {
        db.query(
          'SELECT * FROM user WHERE googleID=?;',
          profile.id,
          (err, results_) => {
            if (err) throw err;

            if(results_.length < 1){
              db.query(
                'INSERT INTO user SET ?',
                {
                  email: profile.emails[0].value,
                  pass_hash: 'a',
                  name: profile.displayName,
                  avatar: profile.photos[0].value,
                  googleID: profile.id
                },
                (err, results) => {
                  if (err) throw err;
                  done(null,results);

                  // res.locals.googleID = results.insertId;
                  // db.end();
                }
              );
            }
            done(null,results_);


            // res.locals.googleID = results[0].googleID;
            // db.end();
          }
        )

        
      }
    )
  );
  