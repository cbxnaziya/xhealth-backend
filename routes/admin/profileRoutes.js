

const express = require('express');
const adminMiddleware = require('../../middleware/adminMiddleware');
const authMiddleware = require('../../middleware/authMiddleware');
const { getAllProfile, updateProfile, removeProfile } = require('../../controllers/admin/profileController');

const router = express.Router();


// router.get('/',authMiddleware, getProfile);
// router.post('/save',authMiddleware, profileSave);
router.delete('/remove',authMiddleware,adminMiddleware, removeProfile);
router.put('/update',authMiddleware,adminMiddleware, updateProfile);
router.get('/',authMiddleware,adminMiddleware, getAllProfile);




module.exports = router;


