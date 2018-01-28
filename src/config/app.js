// Express packages
const express = require('express');
// import bodyParser from 'body-parser';
// import cookieParser from 'cookie-parser';
// import cors from 'cors';
// import compression from 'compression';
// import methodOverride from 'method-override';
// import Resource from 'express-resource'; // eslint-disable-line no-unused-vars

// import mongoose from 'mongoose';
// import helmet from 'helmet';
// import HttpStatus from 'http-status-codes';

const environment = require('./environment');

/**
 * Connect to database
 */
// mongoose.connect(environment.database, { useMongoClient: true });
// mongoose.Promise = Promise;

module.exports = (routes) => {
  const app = express();

  /**
   * Add the middleware
   */
  // app.use(helmet()); // use early so that headers are sure to be set
  // app.use(bodyParser.json());
  // app.use(bodyParser.urlencoded({ extended: true }));
  // app.use(cookieParser());
  // app.use(compression());
  // app.use(methodOverride());
  // app.use(cors({ origin: '*' }));
  // app.enable('trust proxy');
  
  /**
   * Connect the routes
   */
  if (routes && typeof routes === 'function') {
    routes(app);
  }

  return app;
}
