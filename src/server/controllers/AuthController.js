const passport = require('passport');

/* -------------------OAuth Routes----------------------- */
module.exports = (app) => {
    /* route to get the code from google */
    app.get('/auth/google', 
    passport.authenticate('google', {
            scope: ['profile', 'email'] 
        })
    ); 

    /* The callback after receiving the code from google */
    app.get('/auth/google/callback', 
        passport.authenticate('google')
    );

    app.get('/api/logout', (req,res) =>{
        req.logout();
        res.send(req.user);
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })
}
