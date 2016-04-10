var mongoose = require('mongoose'),
    crypto = require('crypto'),
    Schema = mongoose.Schema;

    var imageSchema = new mongoose.Schema({
      created: {
        type: Date,
        default: Date.now
      },
      image       : Buffer,
      radius      : Number,
      password    : String,
  }, { strict: true });

mongoose.model('Image', imageSchema);
