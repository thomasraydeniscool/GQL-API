module.exports = {
  production: false,
  environment: 'development',
  port: 4500,
  origin: 'http://localhost:4200',
  endPoint: 'http://localhost:4500',
  database: process.env.MONGODB_URI || 'mongodb://localhost/development',
};
