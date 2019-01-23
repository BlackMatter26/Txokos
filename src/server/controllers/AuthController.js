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
        passport.authenticate('google'),
        (req,res) =>{
            res.redirect('/');
        } 
    );

    app.get('/api/logout', (req,res) =>{
        req.logout();
        res.redirect('/')
    });

    app.get('/api/current_user', (req, res) => {
        if(!req.user) res.json("")
        else res.json(req.user);
    })
}
