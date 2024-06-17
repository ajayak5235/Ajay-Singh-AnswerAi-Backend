const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const   User = require('./user')
const Question = sequelize.define('Question', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    question: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    answer: {
    
        type: Sequelize.TEXT,
        allowNull: false,
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },

});

module.exports = Question;
