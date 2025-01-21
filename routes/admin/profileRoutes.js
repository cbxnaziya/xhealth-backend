

const express = require('express');
const adminMiddleware = require('../../middleware/adminMiddleware');
const { getAllProfile } = require('../../controllers/profileController');

const router = express.Router();


// router.get('/',authMiddleware, getProfile);
// router.post('/save',authMiddleware, profileSave);
// router.put('/update',authMiddleware, updateProfile);
router.get('/', getAllProfile);




module.exports = router;


