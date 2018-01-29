const jws = require('jsonwebtoken');
const { createHmac } = require('crypto');

const environment = require('../../config/environment');

const User = require('../../api/user/user.model');

const viewer = (token) => {
    try {
        data = decodeToken(token);
    } catch (error) {
        // throw 401
        return;
    }
    this.token = token;
    this.hmac = undefined;
    this.user = {
        _id: undefined,
        name: undefined,
        role: undefined,
    };
    this.expiration = Date.now() + environment.token.expiration;
}

exports.viewer = viewer;

const decodeToken = exports.decodeToken = (token) => jwt.verify(token, environment.token.secret);

const packageAuth = exports.packageAuth = (user) => {
    
};