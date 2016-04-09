var users = require('../../app/controllers/user.server.controller.js');

module.exports = function(app) {
  app.route('/user')
    .post(users.create)
    .get(users.list);

  app.route('/user/:1')
    .get(users.read);

  app.param('1', users.userByID);

};
