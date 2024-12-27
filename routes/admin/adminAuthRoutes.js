const express = require('express');
const { signup, signinWithEmailPassword } = require('../../controllers/admin/authController');

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signinWithEmailPassword);





module.exports = router;
