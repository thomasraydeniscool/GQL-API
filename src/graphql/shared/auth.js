const jws = require('jsonwebtoken');
const { createHmac } = require('crypto');

const environment = require('../../config/environment');

const User = require('../../api/user/user.model');

const viewer = (token) => {
    this._constructor = (token) => {
        if (!token) {
            return;
        }
        let data;
        try {
            data = decodeToken(token);
        } catch(err) {
            return;
        }
        const user = await User.findById(data._id);
        if (!user) {
            return;
        }
        this.user = user;
    }
    this._constructor(token);
}

exports.viewer = viewer;

const decodeToken = exports.decodeToken = (token) => jwt.verify(token, environment.token.secret);

const packageAuth = exports.packageAuth = (user) => {
    
};