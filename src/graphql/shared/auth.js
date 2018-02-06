const jws = require('jsonwebtoken');
const { createHmac } = require('crypto');

const environment = require('../../config/environment');

const User = require('../../api/user/user.model');

const viewer = (req) => {
    this._constructor = async (req) => {
        if (!req.headers || !req.headers.authorization) {
            // apiUnauthorized(res);
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
    this._constructor(req);
}

exports.Viewer = viewer;

const generateToken = exports.generateToken = ({ _id, email, role }) => jwt.sign({ _id, email, role }, environment.token.secret, { expiresIn: environment.token.expiration });

const decodeToken = exports.decodeToken = (token) => jwt.verify(token, environment.token.secret);

const packageAuth = exports.packageAuth = (user) => {
    const hmac = createHmac('sha256', environment.intercom.secretKey);
    return {
        token: generateToken(user),
        hmac: hmac.update(user.email).digest('hex'),
        _id: user._id,
        role: user.role,
        email: user.email,
        createdAt: user.createdAt,
        expiration: Date.now() + environment.token.expiration,
    };
};