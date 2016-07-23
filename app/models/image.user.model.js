var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

    var imageSchema = new mongoose.Schema({
      created: {
        type: Date,
        default: Date.now
      },
      image       : String,//will be a url to the location of the file
      radius      : Number,//preset number for which to share the file
      password    : String,//Not a strong password, no need for protection
  }, { strict: true });

mongoose.model('Image', imageSchema);
