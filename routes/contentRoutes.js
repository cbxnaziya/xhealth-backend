const express = require('express');
const { createQuestion, getAllQuestions } = require('../controllers/contentController');



const router = express.Router();

// Routes for CRUD operations
router.post('/add', createQuestion); // Create a new question
router.get('/', getAllQuestions); // Get all questions
// router.get('/:id', getQuestionById); // Get question by ID
// router.put('/:id', updateQuestion); // Update question by ID
// router.delete('/:id', deleteQuestion); // Delete question by ID

module.exports = router;

