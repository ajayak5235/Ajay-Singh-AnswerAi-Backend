const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models');

const generateToken = require('../utils/generateToken');

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const token = generateToken(user.id);
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

const logout = (req, res) => {
    res.status(200).json({ message: 'Logged out successfully' });
};

const refreshToken = (req, res) => {
    const { token } = req.body;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const newToken = generateToken(decoded.id);
        res.json({ token: newToken });
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = {
    login,
    logout,
    refreshToken,
};
