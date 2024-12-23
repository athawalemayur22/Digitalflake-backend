const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/AuthController')
const AuthValidation = require('../middlewares/AuthValidation')

router.post("/signup", AuthValidation.signUpValidation, AuthController.signup);
router.post("/login", AuthValidation.signUpValidation, AuthController.login);

module.exports = router;