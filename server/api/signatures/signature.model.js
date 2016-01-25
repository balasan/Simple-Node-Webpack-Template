'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SignatureSchema = new Schema({
    timeStamp: Date,
    name: String,
    signature: String,
    rand: Number
});

module.exports = mongoose.model('Signature', SignatureSchema);