const { generateAnswer } = require('../services/aiService');
const { Question } = require('../models');

const createQuestion = async (req, res) => {
    try {
        const { question } = req.body;
        const userId = req.user.id;

        const answer = await generateAnswer(question);

        const newQuestion = await Question.create({
            question,
            answer,
            userId,
        });

        res.status(201).json(newQuestion);
    } catch (error) {
        console.error('Error creating question:', error);
        res.status(500).json({ error: 'Failed to create question' });
    }
};

const getQuestionById = async (req, res) => {
    try {
        const { questionId } = req.params;
        const question = await Question.findByPk(questionId);

        if (!question) return res.status(404).json({ error: 'Question not found' });

        res.status(200).json(question);
    } catch (error) {
        console.error('Error fetching question:', error);
        res.status(500).json({ error: 'Failed to fetch question' });
    }
};

const getUserQuestions = async (req, res) => {
    try {
        const { userId } = req.params;
        const questions = await Question.findAll({ where: { userId } });

        res.status(200).json(questions);
    } catch (error) {
        console.error('Error fetching user questions:', error);
        res.status(500).json({ error: 'Failed to fetch user questions' });
    }
};

module.exports = {
    createQuestion,
    getQuestionById,
    getUserQuestions,
};
