const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Question = require('./question');

User.hasMany(Question, { foreignKey: 'userId' });
Question.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
    sequelize,
    User,
    Question,
};
