const express = require('express');
const router = express.Router();

const authController = require('../controllers/AuthController');

// [POST] /auth
router.post('/signup', authController.create);
router.post('/signin', authController.userSignIn);

module.exports = router;
