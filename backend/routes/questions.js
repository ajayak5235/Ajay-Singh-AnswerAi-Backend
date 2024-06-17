const express = require('express');
const { createQuestion, getQuestionById, getUserQuestions } = require('../controllers/questionController');
const authenticateToken = require('../middlewares/auth');
const router = express.Router();

router.post('/', authenticateToken, createQuestion);
router.get('/:questionId', authenticateToken, getQuestionById);
router.get('/user/:userId', authenticateToken, getUserQuestions);

module.exports = router;
