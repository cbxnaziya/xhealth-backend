
const express = require('express');
const { getProfileQuestions } = require('../../controllers/admin/profileQuestionsController');
const adminMiddleware = require('../../middleware/adminMiddleware');
const authMiddleware = require('../../middleware/authMiddleware');

const router = express.Router();

// router.get('/',authMiddleware, getProfile);
// router.post('/save',authMiddleware, profileSave);
// router.delete('/remove',authMiddleware,adminMiddleware, removeProfile);
// router.put('/update',authMiddleware,adminMiddleware, updateProfile);
router.get('/',authMiddleware, getProfileQuestions);



module.exports = router;