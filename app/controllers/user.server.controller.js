var User = require('mongoose').model('User');
  passport = require('passport');

var Image = require('mongoose').model('Image')


var getErrorMessage = function(err) {
  var message = '';

  if(err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
          message = 'Username already exist';
        break;
      default:
          message = "Something went wrong";

    }
  }
  else{
    for (var errName in err.errors) {
      if (err.errors[errName].message) message = err.errors[errName].message;
    }
  }
  return message;
};

exports.renderDecision = function(req, res, next){
  res.render('decision');
}
exports.renderCreate1 = function(req, res, next){
  res.render('create1');
}

exports.create1 = function(req, res, next){
  console.log(req.body);
  var data = new Image(req.body);
  /*var file = data.image;
  	var filesSelected = file.files;
    if (filesSelected.length > 0)
    {
            var fileToLoad = filesSelected[0];

            var fileReader = new FileReader();

            fileReader.onload = function(fileLoadedEvent) {
            var srcData = fileLoadedEvent.target.result; // <--- data: base64

            var newImage = document.createElement('img');
            newImage.src = srcData;

            data.Image = srcData;
        }*/
  return res.redirect('/create2');
//}
}

exports.renderCreate2 = function(req, res, next){
  res.render('create2');
}
exports.renderGrabbit1 = function(req, res, next){
  res.render('grabbit1');
}
exports.renderGrabbit2 = function(req, res, next){
  res.render('grabbit2');
}




exports.renderSignin = function (req, res, next) {

  if(!req.user) {
    res.render ('signin', {
      title: 'Sign-in Form',
      messages: req.flash('error') || req.flash('info')
    });
  } else{
      return res.redirect('/');
  }
};
exports.renderSignup = function(req, res, next){
  if(!req.user) {
    res.render('signup', {
      title: 'Sign-up Form',
      messages: req.flash('error')
    });
  } else {
    return res.redirect('/');
  }
};

exports.signup = function(req, res, next) {
  if(!req.user) {
    var user = new User(req.body);
    var message = null;

    user.provider = 'local';

    user.save(function(err){
      if(err) {
        var message = getErrorMessage(err);

        req.flash('error', message);
        return res.redirect('/signup');
      }
      req.login(user, function(err){
        if (err) return next (err);
        return res.redirect('/');
      });
    });
  } else {
    return res.redirect('/');
  }
};

exports.signout = function(req, res) {
  req.logout();
  res.redirect('/');
}

/* --------------------------------------------------- */


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

exports.create_i = function(req, res, next){
  var user = new Image(req.body);
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

exports.list_i = function(req, res, next) {
     Image.find({}, function(err, users) {
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
    });
};

exports.update = function(req, res, next) {
  User.findByIdAndUpdate(req.params.userId, req.body, function(err, user) {
    if (err) {
      return next(err);
    } else {
      res.json(user);
    }
  });
};

exports.delete = function(req, res, next) {
  User.remove({_id: req.params.userId}, function(err, user) {
      res.json(user);
  });

};
