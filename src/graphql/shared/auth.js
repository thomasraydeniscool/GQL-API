const jwt = require('jsonwebtoken');
const { createHmac } = require('crypto');

const environment = require('../../config/environment');

const User = require('../../api/user/user.model');

function Viewer(user) {
    this._id = user._id.toString();
    this.role = user.role;
    this.email = user.email;
}

const viewerFromToken = exports.viewerFromToken = async (token) => {
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
    return new Viewer(user);
}

const getToken = exports.getToken = ({ headers }) => {
    if (!headers || !headers.authorization) {
        return;
    }
    return headers.authorization.slice(7);
}

const generateToken = exports.generateToken = ({ _id, email, role }) => jwt.sign({ _id, email, role }, environment.token.secret, { expiresIn: environment.token.expiration });

const decodeToken = exports.decodeToken = (token) => jwt.verify(token, environment.token.secret);

const packageAuth = exports.packageAuth = (user) => {
    // const hmac = createHmac('sha256', environment.intercom.secretKey);
    return {
        token: generateToken(user),
        // hmac: hmac.update(user.email).digest('hex'),
        user: {
            _id: user._id.toString(),
            role: user.role,
            email: user.email,
        },
        expiration: (Date.now() + environment.token.expiration).toString(), // string because to large on an integer for GraphQL
    };
};

const loginUser = exports.loginUser = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user) {
        return null;
    }
    const match = await user.comparePassword(password);
    if (!match) {
        return null;
    }
    return packageAuth(user);
}