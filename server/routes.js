var express = require('express');
var router = express.Router();


module.exports = function(app) {

  //API
  if(process.env.USE_DB){
    // app.use('/api/signatures', require('./api/signatures'));
  }

  /* GET home page. */
  var index = router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
  });
  app.use('/', index);



  /// error handlers
  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
  });

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
      app.use(function(err, req, res, next) {
          res.status(err.status || 500);
          res.render('error', {
              message: err.message,
              error: err,
              title: 'error'
          });
      });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
          message: err.message,
          error: {},
          title: 'error'
      });
  });


};