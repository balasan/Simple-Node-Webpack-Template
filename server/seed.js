'use strict';


var Signature = require('./api/signatures/signature.model');

var testData = {
  timeStamp: new Date(),
  name: "Some Name",
  signature: "Some String",
  rand: Math.random()
}

Signature
  .find({})
  .remove(function() {
    Signature.create(testData)
    console.log("SEEDING DB", testData);
  })

