const express = require('express');
const router = express.Router();
const { createUser, getUserById } = require('../controllers/userController');
const auth = require('../middlewares/auth');

router.post('/', createUser);
router.get('/:userId', auth, getUserById);

module.exports = router;
