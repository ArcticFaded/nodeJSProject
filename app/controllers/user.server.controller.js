var User = require('mongoose').model('User');

exports.create = function(req, res, next){
  var user = new User(req.body);
  user.save(function(err){
    if(err){
      return next(err);
    } else {
      res.json(user);
    }
  });
};

exports.list = function(req, res, next) {
     User.find({}, function(err, users) {
       if (err) {
         return next(err);
       } else {
         res.json(users);
} });
};

exports.read = function(req, res){
  var userId = req.params.userId;
    User.find({_id: userId}, function(err, user) {
        res.json(user);
    })


};

exports.userById = function(req, res, next, id){

  User.findOne({
    _id:"recordId"
  }, function(err, user) {
    if(err) {
      return next (err);
    } else {
      req.user = user;
      next();
    }
  });
};
