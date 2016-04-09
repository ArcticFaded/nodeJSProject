var users = require('../../app/controllers/user.server.controller.js');

module.exports = function(app) {
  app.route('/users')
    .post(users.create)
    .get(users.list);

  app.route('/users/:userId')
    .get(users.read);
  //app.param('_Id', users.userByID);
  //var userId = ;
  //app.param('/userId',users.userByID);
};
