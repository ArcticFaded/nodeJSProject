var users = require('../../app/controllers/user.server.controller.js');

module.exports = function(app) {
  app.route('/users')
    .post(users.create)
    .get(users.list);

  app.route('/image')
    .post(users.create_i)
    .get(users.list_i);

  app.route('/decision')
    .get(users.renderDecision);

  app.route('/create1')
    .get(users.renderCreate1)
    .post(users.create1);


  app.route('/create2')
    .get(users.renderCreate2);

  app.route('/grabbit1')
    .get(users.renderGrabbit1);

  app.route('/grabbit2')
    .get(users.renderGrabbit2);

  app.route('/users/:userId')
    .get(users.read)
    .put(users.update)
    .delete(users.delete);
  
  app.route('/signup')
     .get(users.renderSignup)
     .post(users.signup);

  app.route('/signin')
      .get(users.renderSignin)
      .post(passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/signin',
        failureFlash: true
      }));
  app.get('/signout', users.signout);
};
