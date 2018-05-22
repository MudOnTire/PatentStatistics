const path = require('path');
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const chalk = require('chalk');
const errorHandler = require('errorhandler');
const expressStatusMonitor = require('express-status-monitor');

/**
 * controllers
 */
const homeController = require('./controllers/home');

/**
 * server
 */
const app = express();

app.set('host', process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(expressStatusMonitor());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

/**
 * routes
 */
app.get('/statistics/bag', homeController.bagStatistics);
app.get('/statistics/store', homeController.storeStatistics);

/**
 * Error Handler.
 */
if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorHandler());
  }
  
  /**
   * Start Express server.
   */
  app.listen(app.get('port'), () => {
    console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
  });
  
  module.exports = app;
  