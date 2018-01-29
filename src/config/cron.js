const schedule = require('node-schedule');

/**
 * Run a console log every Monday at 10AM
 */
export const itsMonday = () => schedule.scheduleJob('0 0 10 * * 1', () => {
    console.log('WOW! It is Monday at 10AM!');
});