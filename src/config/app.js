const express = require('express');
const mongoose = require('mongoose');

const environment = require('./environment');

/**
 * Connect to the database
 */
mongoose.connect(environment.database);

module.exports = (routes) => {
  const app = express();
  
  /**
   * Connect the routes
   */
  if (routes && typeof routes === 'function') {
    routes(app);
  }

  return app;
}
