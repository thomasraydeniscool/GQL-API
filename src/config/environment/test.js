module.exports = {
  production: false,
  environment: 'test',
  port: 4501,
  origin: 'http://localhost:4200',
  endPoint: 'http://localhost:4501',
  database: process.env.MONGODB_URI || 'mongodb://localhost/test',
};
